import dataTransform, { getAllColumnIndices, getDisplayIndices, getPartialExposedKey, generateCompositeKey } from './data-transform';
import withScenarioData from './data-loader';
import Paginator from "./paginator";

const SelectOptions = insightModules.load('components/autotable-select-options');

class Datagrid {
    constructor(root, options$, columnOptions$) {
        this.options$ = options$;
        this.columnOptions$ = columnOptions$;
        this.componentRoot = root;
        this.table = undefined;
        this.schema = insight
            .getView()
            .getProject()
            .getModelSchema();

        const options = ko.unwrap(options$);

        this.table = this.createTable(options);

        this.paginatorControl = this.createPaginatorControl(this.componentRoot, this.table);

        this.buildTable();
    }

    buildTable () {
        const columnOptions$ = this.columnOptions$;

        const scenariosData$ = withScenarioData(columnOptions$);

        ko.pureComputed(() => {
            const columnOptions = columnOptions$();
            const scenariosData = scenariosData$();

            if (columnOptions && scenariosData) {
                this.setColumnsAndData(columnOptions, scenariosData);
            }
            return undefined;
        }).subscribe(_.noop);
    }

    createTable(options) {
        const tabulatorOptions = {
            pagination: options.pagination,
            paginationSize: options.paginationSize,
            paginationElement: options.paginationElement,
            layout: 'fitColumns',
            placeholder: 'Waiting for data',
            groupStartOpen: false,
            ajaxLoader: true,
            columns: [],
        };

        return new Tabulator(`#${options.tableId}`, tabulatorOptions);
    }

    createPaginatorControl(componentRoot, table) {
        let $componentRoot = $(componentRoot);
        let $footerToolBar = $componentRoot.find('.footer-toolbar');
        const paginatorControl = new Paginator(table);
        paginatorControl.appendTo($footerToolBar);
        return paginatorControl;
    }

    setColumnsAndData(columnOptions, scenariosData) {
        const table = this.table;
        const schema = this.schema;
        const indicesOptions = columnOptions.indicesOptions
        const entitiesOptions = columnOptions.columnOptions
        const allColumnIndices = getAllColumnIndices(schema, entitiesOptions);

        const setNameAndPosns = getDisplayIndices(allColumnIndices, entitiesOptions);

        const setNamePosnsAndOptions = _.map(setNameAndPosns, setNameAndPosn => ({
            ...setNameAndPosn,
            options: _.get(indicesOptions, `${setNameAndPosn.name}.${setNameAndPosn.position}`, {
                id: `${setNameAndPosn.name}_${setNameAndPosn.position}`
            })
        }))

        const allScenarios = _.uniq([scenariosData.defaultScenario].concat(_.values(scenariosData.scenarios)));

        const indicesColumns = _.map(setNamePosnsAndOptions, setNameAndPosn => {
            const { name, options } = setNameAndPosn;
            const entity = schema.getEntity(name);

            return {
                title: String(options.title || entity.getAbbreviation() || name),
                field: options.id,
                mutatorData: (value, data, type, params) => SelectOptions.getLabel(schema, allScenarios, entity, value)
            };
        });

        const columnsIds = _.map(setNamePosnsAndOptions, 'options.id').concat(_.map(entitiesOptions, 'id'));

        const entitiesColumns =  _.map(entitiesOptions, (entityOptions, columnNumber) => {
            const entity = schema.getEntity(entityOptions.name);

            return _.assign(entityOptions, {
                title: String(entityOptions.title || entity.getAbbreviation() || entityOptions.name),
                field: entityOptions.id,
                mutatorData: (value, data) => {
                    const rowData = _.map(columnsIds, _.propertyOf(data));
                    const tableKeys = getPartialExposedKey(setNameAndPosns, rowData);
                    const keys = generateCompositeKey(tableKeys, setNameAndPosns, allColumnIndices[columnNumber], entityOptions);
                    const columnScenario = _.get(scenariosData.scenarios, entityOptions.id, scenariosData.defaultScenario);
                    return window.insight.Formatter.getFormattedLabel(entity, columnScenario, value, keys);
                }
            });
        });
        const columns = [].concat(indicesColumns, entitiesColumns);

        const data = dataTransform(allColumnIndices, entitiesColumns, setNamePosnsAndOptions, scenariosData)

        table.setColumns(columns);

        return table
            .setData(data)
            .then(() => {
                table.redraw();
                this.paginatorControl.updatePageIndicators();
            })
            .catch((err) => {
                debugger;
            });
    }
}

export default Datagrid;
