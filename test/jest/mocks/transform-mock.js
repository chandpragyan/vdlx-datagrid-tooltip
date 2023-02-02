import './console-globals'
export const paramsBuilder = {
  element: {
    params: {
      addColumn: {
        value: "$component.addColumn",
        isExpression: true,
      },
      removeColumn: {
        value: "$component.removeColumn",
        isExpression: true,
      },
      tableValidate: {
        value: "$component.tableValidate",
        isExpression: true,
      },
      entity: "region_type",
      editable: "true",
      editorOptionsSet: "REGION_TYPES",
    },
  },
  addFunctionOrExpressionParam: function (a, b, c) {
    return true;
  },
  addRawOrExpressionParam: function (a, b, c) {
    return true;
  },
  addParam: function (a, b) {
    return true;
  },
};
export const cellAttribute = {
  "entity": {
      "rawValue": "demand_product",
      "expression": {
          "value": "\"demand_product\"",
          "isString": true
      }
  },
  "tooltip": {
      "rawValue": "=true",
      "expression": {
          "value": "true",
          "isString": false
      }
  },
  "cell-tooltip-func": {
      "rawValue": "=displayCellTooltip({entityWithCal:['demand_unit_penal', 'demand_max'], cal:['sum','max'], entityWithVal:['demand_period','demand_max', 'demand_basis']})",
      "expression": {
          "value": "displayCellTooltip({\n    entityWithCal: [\n        'demand_unit_penal',\n        'demand_max'\n    ],\n    cal: [\n        'sum',\n        'max'\n    ],\n    entityWithVal: [\n        'demand_period',\n        'demand_max',\n        'demand_basis'\n    ]\n})",
          "isString": false
      }
  }
};
export const headerAttribute = {
  "entity": {
      "rawValue": "demand_max",
      "expression": {
          "value": "\"demand_max\"",
          "isString": true
      }
  },
  "header-tooltip": {
      "rawValue": "=true",
      "expression": {
          "value": "true",
          "isString": false
      }
  },
  "header-tooltip-func": {
      "rawValue": "=displayHeaderTooltip({entityWithCal:'demand_unit_penal', cal:['sum','min']})",
      "expression": {
          "value": "displayHeaderTooltip({\n    entityWithCal: 'demand_unit_penal',\n    cal: [\n        'sum',\n        'min'\n    ]\n})",
          "isString": false
      }
  }
}
export const cellElement = `<vdlx-datagrid><vdlx-datagrid-column entity="demand_product" heading="Product" tooltip="true" cell-tooltip-func="=displayCellTooltip({entityWithCal:['demand_unit_penal', 'demand_max'], cal:['sum','max'], entityWithVal:['demand_period','demand_max', 'demand_basis']})" editor-options-set="PRODUCT_DISPLAY_NAMES" editable="true" params="{&quot;addColumn&quot;:($component.addColumn), &quot;removeColumn&quot;:($component.removeColumn), &quot;tableValidate&quot;:($component.tableValidate), &quot;entity&quot;:&quot;demand_product&quot;, &quot;editable&quot;:&quot;true&quot;, &quot;editorOptionsSet&quot;:&quot;PRODUCT_DISPLAY_NAMES&quot;, &quot;heading&quot;:&quot;Product&quot;, &quot;tooltip&quot;:(&quot;true&quot;), &quot;cellTooltipFunc&quot;:(function (entity, data) {
return displayCellTooltip({
    entityWithCal: [
        'demand_unit_penal',
        'demand_max'
    ],
    cal: [
        'sum',
        'max'
    ],
    entityWithVal: [
        'demand_period',
        'demand_max',
        'demand_basis'
    ]
});
})}"></vdlx-datagrid-column></vdlx-datagrid>`;
export const headerElement = `<vdlx-datagrid><vdlx-datagrid-column entity="demand_product" heading="Product" tooltip="true" header-tooltip-func="=displayCellTooltip({entityWithCal:['demand_unit_penal', 'demand_max'], cal:['sum','max'], entityWithVal:['demand_period','demand_max', 'demand_basis']})" editor-options-set="PRODUCT_DISPLAY_NAMES" params="{&quot;addColumn&quot;:($component.addColumn), &quot;removeColumn&quot;:($component.removeColumn), &quot;tableValidate&quot;:($component.tableValidate), &quot;entity&quot;:&quot;demand_product&quot;, &quot;editable&quot;:&quot;true&quot;, &quot;editorOptionsSet&quot;:&quot;PRODUCT_DISPLAY_NAMES&quot;, &quot;heading&quot;:&quot;Product&quot;, &quot;tooltip&quot;:(&quot;true&quot;), &quot;cellTooltipFunc&quot;:(function (entity, data) {
return displayCellTooltip({
    entityWithCal: [
        'demand_unit_penal',
        'demand_max'
    ],
    cal: [
        'sum',
        'max'
    ],
    entityWithVal: [
        'demand_period',
        'demand_max',
        'demand_basis'
    ]
});
})}"></vdlx-datagrid-column></vdlx-datagrid>`;

let entityData = {
  _data: {
    projectId: "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
    name: "demand_max",
    abbreviatedName: "Max Demand",
    alias: "Max Demand",
    dataType: "ARRAY",
    labelsEntityName: null,
    indexSets: ["REGIONS"],
    managementType: "INPUT",
    elementType: "STRING",
    indexGroupings: null,
    violationUpperBoundEntity: null,
    violationCostEntity: null,
    alwaysHidden: false,
    format: null,
    hidden: false,
    disableable: false,
    relaxable: false,
    constant: false,
    indexGrouping: false,
    labelsEntity: false,
  },
  getType: function () {
    return this._data.dataType;
  },
};

export const api = {
  getComponentParamsBuilder: (element) => {
    return componentParamsBuilder;
  },
  getModelEntityByName: (x) => {
    return entityData;
  },
};

let addParamElems = {
  element: {
    params: {
      addColumn: {
        value: "$component.addColumn",
        isExpression: true,
      },
      removeColumn: {
        value: "$component.removeColumn",
        isExpression: true,
      },
      tableValidate: {
        value: "$component.tableValidate",
        isExpression: true,
      },
      entity: "demand_max",
      editable: "true",
      heading: {
        value: "$root.scenario.entities.DisplayName()('demand_max').value",
        isExpression: true,
      },
    },
  },
  addRawOrExpressionParam: function (a, b) {
    return true;
  },
  addFunctionOrExpressionParam: function (a, b, c) {
    return true;
  },
  addParam: function () {
    return {};
  },
};

let componentParamsBuilder = {
  element: {
    params: {
      addColumn: {
        value: "$component.addColumn",
        isExpression: true,
      },
      removeColumn: {
        value: "$component.removeColumn",
        isExpression: true,
      },
      tableValidate: {
        value: "$component.tableValidate",
        isExpression: true,
      },
      entity: "demand_max",
      editable: "true",
    },
  },
  addParam: function (a, b, c) {
    return {
      addParam: function (a, b, c) {
        return {
          addParam: function (a, b, c) {
            return addParamElems;
          },
        };
      },
    };
  },
};
