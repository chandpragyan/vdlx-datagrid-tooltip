import { EDITOR_TYPES } from '../constants';
import isFunction from 'lodash/isFunction';
import isNumber from 'lodash/isNumber';
import size from 'lodash/size';
import { insightGetter, enums, validatorFactory } from '../insight-modules';
import defer from 'lodash/defer';
import throttle from 'lodash/throttle';

export const createProps = (columnId, params, filters, element) => {
    var props = {
        scenario: params.scenario,
        title: params.heading,
        width: params.width,
        editable: ('' + params.editable).toLowerCase() === 'true',
        visible: !(('' + params.visible).toLowerCase() === 'false'),
        style: params.style,
        sortByFormatted: params.sortByFormatted,
        filterByFormatted: params.filterByFormatted,
        disableSetSorting: params.disableSetSorting,
        editorOptionsSet: params.editorOptionsSet,
        selectNull: params.editorOptionsIncludeEmpty,
        checkedValue: params.editorCheckedValue,
        uncheckedValue: params.editorUncheckedValue,
        id: columnId,
        bottomCalc: params.bottomCalc,
        sortOrder: params.sortOrder,
        sortDirection: params.sortDirection,
        tooltip: params.tooltip,
        headerTooltip: params.headerTooltip,
        cellTooltipFunc: params.cellTooltipFunc,
        headerTooltipFunc: params.headerTooltipFunc,
    };
    if (params.bottomCalc) {
        props.bottomCalcFormatter = function (data) {
            var val = data.getValue();
            if (isNumber(val)) {
                return insightGetter().Formatter.formatNumber(val, params.format);
            }
            return val;
        };
    }
    if (params.editorOptions) {
        props.editorOptions = function () {
            // Return an empty list of options if value is undefined
            return params.editorOptions.apply(null, arguments) || [];
        };
    }
    if (isFunction(params.render)) {
        props.render = params.render;
    }
    if (params.cellTooltipFunc) {
        props.cellTooltipFunc = params.cellTooltipFunc();
    }
    if (params.headerTooltipFunc) {
        props.headerTooltipFunc = params.headerTooltipFunc();
    }
    if (params.format) {
        props.render = (data, type) => {
            var formatCell =
                type === 'display' ||
                (type === 'filter' && params.filterByFormatted) ||
                (type === 'sort' && params.sortByFormatted);
            return formatCell ? insightGetter().Formatter.formatNumber(data, params.format) : data;
        };
        props.format = params.format;
    } else {
        props.format = null;
    }
    if (!!params.entity) {
        props.entity = params.entity;
        if (!params.editorType) {
            // @ts-ignore
            const type = insight
                .getView()
                .getApp()
                .getModelSchema()
                .getEntity(params.entity)
                .getElementType();
            switch (type) {
                case enums.DataType.BOOLEAN:
                    props.editorType = EDITOR_TYPES.checkbox;
                    break;
                default:
                    props.editorType = EDITOR_TYPES.text;
                    break;
            }
            // Then overridden by the presence of input options
            if (typeof props.checkedValue !== 'undefined' && typeof props.uncheckedValue !== 'undefined') {
                props.editorType = EDITOR_TYPES.checkbox;
            }
            if (props.editorOptions || props.editorOptionsSet) {
                props.editorType = EDITOR_TYPES.select;
            }
        } else {
            props.editorType = EDITOR_TYPES[params.editorType];
        }
    } else if (!!params.set) {
        props.set = params.set;
    }
    if (params.setPosition != null) {
        props.setPosition = params.setPosition;
    }
    if (size(filters)) {
        props.filters = filters;
    }
    if (props.entity) {
        var getValidationFn = function (indices) {
            var validationProperties = validatorFactory.getValidationProperties({
                entity: props.entity,
                indices: indices,
            });
            var customValidators = validatorFactory.getCustomValidators(validationProperties, element);
            return validatorFactory.createFromValidators(customValidators);
        };
        var validationObservable = ko.observable().extend({
            functionObservable: {
                onDependenciesChange: throttle(() => defer(() => params.tableValidate())),
                read: (indices, value, rowData) => getValidationFn(indices)(value, rowData),
                disposeWhenDependenciesChange: false,
            },
        });
        props.editorValidate = function (newValue, rowData, keys) {
            // @ts-ignore
            validationObservable(keys, newValue, rowData);
            return validationObservable.peek();
        };
    }
    if (params.tooltip) {
        props.tooltip = function tooltip(cell) {
            let columns = cell.getTable().getColumns();
            let tooltipString = '';
            if (params.tooltip == true && !(params.cellTooltipFunc)) {
                let cellValue = cell.getColumn().getDefinition().title + ": " + cell.getData()[cell.getColumn().getField()] + ' '
                return cellValue;
            } else if (params.tooltip == true && (params.cellTooltipFunc)) {
                let entities = params.cellTooltipFunc();
                let tooltipString = entities[0]
                let entityWithoutCal = entities[1];
                if(entityWithoutCal){
                    entityWithoutCal.forEach((entity) => {
                        columns.forEach(column => {
                            if (column.getDefinition().name === entity && cell.getData()[column.getField()] != "") {
                                tooltipString += "\n"+ column.getDefinition().title + ': ' + cell.getData()[column.getField()] 
                            }
                            else if (column.getDefinition().name === entity && cell.getData()[column.getField()] == "") {
                                tooltipString += "\n"+ column.getDefinition().title + ': ' + 'N/A';
                            }
                        });
                    })
                }
                return tooltipString;
            } else {
                return params.tooltip
            }
        }
    }
    if (params.headerTooltip) {
        props.headerTooltip = function headerTooltip(cell) {
            if (params.headerTooltip == true && !(params.headerTooltipFunc)) {
                let cellValue = cell.getDefinition().title;
                return cellValue;
            } else if (params.headerTooltip == true && (params.headerTooltipFunc)) {
                var entities = params.headerTooltipFunc();
                return entities;
            } else {
                return params.headerTooltip
            }
        }
    }
    return props;
};
