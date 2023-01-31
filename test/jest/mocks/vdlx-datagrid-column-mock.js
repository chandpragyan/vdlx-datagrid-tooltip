export const cell = {
    _cell: {
        column: {
            definition:{
                "title": "ID",
                "editable": false,
                "visible": true,
                "id": "datagrid-column2",
                "set": "DEMAND_RECORDS",
                "index": 0,
                "scenario": 0,
                "field": "datagrid-column2",
                "cssClass": "index numeric",
                "dataType": "SET",
                "elementType": "INTEGER",
                "labelsEntity": null,
                "name": "DEMAND_RECORDS",
                "headerFilterPlaceholder": "No Filter",
                "headerFilter": true,
                "frozen": true
            },
            getDefinition: function(){
                return this.definition;
            },
            getField: function(){
                return this.definition.field;
            }
        },
        row:{
            data: {
            "datagrid-column2": 10,
            "datagrid-column3": "DC 10",
            "datagrid-column4": "Shipment 10",
            "datagrid-column5": "Day 9",
            "datagrid-column6": "",
            "datagrid-column7": true,
            "datagrid-column8": "12",
            "datagrid-column9": "1",
            "datagrid-column10": "",
            "datagrid-column11": "",
            "datagrid-column12": "",
            "datagrid-column13": 10000,
            "datagrid-column14": "",
            "datagrid-column15": "",
            "datagrid-column16": "",
            "datagrid-column17": "",
            "datagrid-column18": "",
            "datagrid-column19": "",
            "datagrid-column20": "",
            "datagrid-column21": "",
            "datagrid-column22": "",
            "datagrid-column23": "",
            "id": 10
            },
            update: function(){
                this.data['datagrid-column3'] = ''
            }
        },
        table: {
            columnManager: {
                columns:[ 
                                
                                        {
                                            definition:{
                                                "title": "Facility",
                                                "editable": {
                                                    "scenarioProps": {
                                                        "_data": {
                                                            "objectType": "SCENARIO",
                                                            "id": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "displayName": "tighter cap 100K",
                                                            "url": "/insightservices/rest/v1/data/scenario/d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "parent": {
                                                                "objectType": "PROJECT",
                                                                "id": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                                                                "displayName": "Supply Chain Solver",
                                                                "url": "/insightservices/rest/v1/data/project/cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2"
                                                            },
                                                            "project": {
                                                                "objectType": "PROJECT",
                                                                "id": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                                                                "displayName": "Supply Chain Solver",
                                                                "url": "/insightservices/rest/v1/data/project/cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2"
                                                            },
                                                            "path": "/Supply Chain Solver/tighter cap 100K",
                                                            "shareStatus": "PRIVATE",
                                                            "ownerId": "admin",
                                                            "loaded": true,
                                                            "modelStatus": "OK",
                                                            "hasResultData": true,
                                                            "scenarioType": "SCENARIO",
                                                            "projectId": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                                                            "creationDate": 1653672286000,
                                                            "lastExecutionDate": 1674023686000,
                                                            "workflowAssetId": null,
                                                            "workflowAssetName": null,
                                                            "workflowInitiatedId": null,
                                                            "workflowProcessId": null,
                                                            "workflowStage": null,
                                                            "notes": "",
                                                            "dirty": true,
                                                            "completed": true,
                                                            "queued": false,
                                                            "objective": null,
                                                            "gap": null,
                                                            "runtime": 1.195,
                                                            "numberOfSolutions": 0,
                                                            "problemStatus": null,
                                                            "modelDataVersion": 0
                                                        }
                                                    },
                                                    "_scenarioAttachmentData": null,
                                                    "_appAttachmentData": null,
                                                    "_data": {
                                                        "demand_facility": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_facility",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": "DC 14",
                                                                "2": "DC 12"
                                                            }
                                                        },
                                                        "demand_product": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_product",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": "Shipment 1",
                                                                "2": "Shipment 2"
                                                            }
                                                        },
                                                        "demand_period": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_period",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": "Day 11",
                                                                "2": "Day 8"
                                                            }
                                                        },
                                                        "demand_mode": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_mode",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_enabled": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_enabled",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": true,
                                                                "2": true
                                                            }
                                                        },
                                                        "demand_basis": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_basis",
                                                            "_dimension": 0,
                                                            "_size": 499,
                                                            "_elementData": {
                                                                "1": "1",
                                                                "2": "2"
                                                            }
                                                        },
                                                        "demand_value_distr": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_value_distr",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": "1",
                                                                "2": "1"
                                                            }
                                                        },
                                                        "demand_min": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_min",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_max": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_max",
                                                            "_dimension": 0,
                                                            "_size": 1,
                                                            "_elementData": {
                                                                "4": 1000
                                                            }
                                                        },
                                                        "demand_unit_revenue": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_unit_revenue",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_unit_penal": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_unit_penal",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": 10000,
                                                                "2": 10000
                                                            }
                                                        },
                                                        "demand_user_note1": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note1",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note2": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note2",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note3": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note3",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note4": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note4",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note5": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note5",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note6": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note6",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note7": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note7",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note8": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note8",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note9": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note9",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note10": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note10",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "DEMAND_RECORDS": [
                                                            1,
                                                            2
                                                        ],
                                                        "FACILITY_DISPLAY_NAMES": [
                                                            "DC 1",
                                                            "DC 2"
                                                        ],
                                                        "PRODUCT_DISPLAY_NAMES": [
                                                            "Shipment 1",
                                                            "Shipment 2"
                                                        ],
                                                        "PERIOD_DISPLAY_NAMES": [
                                                            "Day 1",
                                                            "Day 2"
                                                        ],
                                                        "MODE_DISPLAY_NAMES": [
                                                            "Fast",
                                                            "Slow"
                                                        ],
                                                        "COST_BASIS_OPTIONS": [
                                                            "kg",
                                                            "Quantity"
                                                        ]
                                                    },
                                                    "_summaryData": {
                                                        "lastExecutionDate": 1674023686000,
                                                        "executionTime": 1.195,
                                                        "modelStatus": "OK",
                                                        "hasResultData": true,
                                                        "isLoaded": true,
                                                        "isDirty": true,
                                                        "state": "RESULTS_DIRTY",
                                                        "objective": null,
                                                        "gap": null,
                                                        "numberOfSolutions": 0,
                                                        "problemStatus": null
                                                    },
                                                    "_workflowData": null,
                                                    "_allowedEntities": [
                                                        "demand_facility",
                                                        "demand_product",
                                                        "demand_period",
                                                        "demand_mode",
                                                        "demand_enabled",
                                                        "demand_basis",
                                                        "demand_value_distr",
                                                        "demand_min",
                                                        "demand_max",
                                                        "demand_unit_revenue",
                                                        "demand_unit_penal",
                                                        "demand_user_note1",
                                                        "demand_user_note2",
                                                        "demand_user_note3",
                                                        "demand_user_note4",
                                                        "demand_user_note5",
                                                        "demand_user_note6",
                                                        "demand_user_note7",
                                                        "demand_user_note8",
                                                        "demand_user_note9",
                                                        "demand_user_note10",
                                                        "DEMAND_RECORDS",
                                                        "FACILITY_DISPLAY_NAMES",
                                                        "PRODUCT_DISPLAY_NAMES",
                                                        "PERIOD_DISPLAY_NAMES",
                                                        "MODE_DISPLAY_NAMES",
                                                        "COST_BASIS_OPTIONS"
                                                    ]
                                                },
                                                "visible": true,
                                                "editorOptionsSet": "FACILITY_DISPLAY_NAMES",
                                                "id": "datagrid-column3",
                                                "editorType": "select",
                                                "index": 1,
                                                "scenario": {
                                                    "scenarioProps": {
                                                        "_data": {
                                                            "objectType": "SCENARIO",
                                                            "id": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "displayName": "tighter cap 100K",
                                                            "url": "/insightservices/rest/v1/data/scenario/d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "parent": {
                                                                "objectType": "PROJECT",
                                                                "id": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                                                                "displayName": "Supply Chain Solver",
                                                                "url": "/insightservices/rest/v1/data/project/cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2"
                                                            },
                                                            "project": {
                                                                "objectType": "PROJECT",
                                                                "id": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                                                                "displayName": "Supply Chain Solver",
                                                                "url": "/insightservices/rest/v1/data/project/cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2"
                                                            },
                                                            "path": "/Supply Chain Solver/tighter cap 100K",
                                                            "shareStatus": "PRIVATE",
                                                            "ownerId": "admin",
                                                            "loaded": true,
                                                            "modelStatus": "OK",
                                                            "hasResultData": true,
                                                            "scenarioType": "SCENARIO",
                                                            "projectId": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                                                            "creationDate": 1653672286000,
                                                            "lastExecutionDate": 1674023686000,
                                                            "workflowAssetId": null,
                                                            "workflowAssetName": null,
                                                            "workflowInitiatedId": null,
                                                            "workflowProcessId": null,
                                                            "workflowStage": null,
                                                            "notes": "",
                                                            "dirty": true,
                                                            "completed": true,
                                                            "queued": false,
                                                            "objective": null,
                                                            "gap": null,
                                                            "runtime": 1.195,
                                                            "numberOfSolutions": 0,
                                                            "problemStatus": null,
                                                            "modelDataVersion": 0
                                                        }
                                                    },
                                                    "_scenarioAttachmentData": null,
                                                    "_appAttachmentData": null,
                                                    "_data": {
                                                        "demand_facility": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_facility",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": "DC 14",
                                                                "2": "DC 12"
                                                            }
                                                        },
                                                        "demand_product": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_product",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": "Shipment 1",
                                                                "2": "Shipment 2"
                                                            }
                                                        },
                                                        "demand_period": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_period",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": "Day 11",
                                                                "2": "Day 8"
                                                            }
                                                        },
                                                        "demand_mode": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_mode",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_enabled": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_enabled",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": true,
                                                                "2": true
                                                            }
                                                        },
                                                        "demand_basis": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_basis",
                                                            "_dimension": 0,
                                                            "_size": 499,
                                                            "_elementData": {
                                                                "1": "1",
                                                                "2": "2"
                                                            }
                                                        },
                                                        "demand_value_distr": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_value_distr",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": "1",
                                                                "2": "1"
                                                               
                                                            }
                                                        },
                                                        "demand_min": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_min",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_max": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_max",
                                                            "_dimension": 0,
                                                            "_size": 1,
                                                            "_elementData": {
                                                                "4": 1000
                                                            }
                                                        },
                                                        "demand_unit_revenue": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_unit_revenue",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_unit_penal": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_unit_penal",
                                                            "_dimension": 0,
                                                            "_size": 500,
                                                            "_elementData": {
                                                                "1": 10000,
                                                                "2": 10000
                                                            }
                                                        },
                                                        "demand_user_note1": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note1",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note2": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note2",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note3": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note3",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note4": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note4",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note5": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note5",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note6": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note6",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note7": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note7",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note8": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note8",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note9": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note9",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "demand_user_note10": {
                                                            "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                                                            "_entityName": "demand_user_note10",
                                                            "_dimension": 0,
                                                            "_size": 0,
                                                            "_elementData": {}
                                                        },
                                                        "DEMAND_RECORDS": [
                                                            1,
                                                            2
                                                        ],
                                                        "FACILITY_DISPLAY_NAMES": [
                                                            "DC 1",
                                                            "DC 2"
                                                        ],
                                                        "PRODUCT_DISPLAY_NAMES": [
                                                            "Shipment 1",
                                                            "Shipment 2",
                                                        ],
                                                        "PERIOD_DISPLAY_NAMES": [
                                                            "Day 1",
                                                            "Day 2",
                                                        ],
                                                        "MODE_DISPLAY_NAMES": [
                                                            "Fast",
                                                            "Slow"
                                                        ],
                                                        "COST_BASIS_OPTIONS": [
                                                            "kg",
                                                            "Quantity"
                                                        ]
                                                    },
                                                    "_summaryData": {
                                                        "lastExecutionDate": 1674023686000,
                                                        "executionTime": 1.195,
                                                        "modelStatus": "OK",
                                                        "hasResultData": true,
                                                        "isLoaded": true,
                                                        "isDirty": true,
                                                        "state": "RESULTS_DIRTY",
                                                        "objective": null,
                                                        "gap": null,
                                                        "numberOfSolutions": 0,
                                                        "problemStatus": null
                                                    },
                                                    "_workflowData": null,
                                                    "_allowedEntities": [
                                                        "demand_facility",
                                                        "demand_product",
                                                        "demand_period",
                                                        "demand_mode",
                                                        "demand_enabled",
                                                        "demand_basis",
                                                        "demand_value_distr",
                                                        "demand_min",
                                                        "demand_max",
                                                        "demand_unit_revenue",
                                                        "demand_unit_penal",
                                                        "demand_user_note1",
                                                        "demand_user_note2",
                                                        "demand_user_note3",
                                                        "demand_user_note4",
                                                        "demand_user_note5",
                                                        "demand_user_note6",
                                                        "demand_user_note7",
                                                        "demand_user_note8",
                                                        "demand_user_note9",
                                                        "demand_user_note10",
                                                        "DEMAND_RECORDS",
                                                        "FACILITY_DISPLAY_NAMES",
                                                        "PRODUCT_DISPLAY_NAMES",
                                                        "PERIOD_DISPLAY_NAMES",
                                                        "MODE_DISPLAY_NAMES",
                                                        "COST_BASIS_OPTIONS"
                                                    ]
                                                },
                                                "name": "demand_facility",
                                                "field": "datagrid-column3",
                                                "cssClass": "select-editor",
                                                "editor": "select",
                                                "dataType": "ARRAY",
                                                "elementType": "STRING",
                                                "headerFilterPlaceholder": "No Filter",
                                                "headerFilter": "input",
                                                "frozen": true
                                            },
                                            getDefinition: function(){
                                                return this.definition;
                                            },
                                            getField: function(){
                                                return this.definition.field;
                                            }
                                        }
                                
                                
                        ]
            },
            getColumns: function(){
                
                return this.columnManager.columns;
            }
        }

    },
    getTable: function(){
        return this._cell.table;
    },
    getColumn: function(){
        return this._cell.column;
    },
    getRow: function(){
        return this._cell.row
    },
    getData: function(){
        return this._cell.row.data
    }
}
export const headerCell={
    _column : {
        definition:{
            "title": "Max Demand",
            "editable": {
                "scenarioProps": {
                    "_data": {
                        "objectType": "SCENARIO",
                        "id": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "displayName": "tighter cap 100K",
                        "url": "/insightservices/rest/v1/data/scenario/d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "parent": {
                            "objectType": "PROJECT",
                            "id": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                            "displayName": "Supply Chain Solver",
                            "url": "/insightservices/rest/v1/data/project/cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2"
                        },
                        "project": {
                            "objectType": "PROJECT",
                            "id": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                            "displayName": "Supply Chain Solver",
                            "url": "/insightservices/rest/v1/data/project/cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2"
                        },
                        "path": "/Supply Chain Solver/tighter cap 100K",
                        "shareStatus": "PRIVATE",
                        "ownerId": "admin",
                        "loaded": true,
                        "modelStatus": "OK",
                        "hasResultData": true,
                        "scenarioType": "SCENARIO",
                        "projectId": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                        "creationDate": 1653672286000,
                        "lastExecutionDate": 1674023686000,
                        "workflowAssetId": null,
                        "workflowAssetName": null,
                        "workflowInitiatedId": null,
                        "workflowProcessId": null,
                        "workflowStage": null,
                        "notes": "",
                        "dirty": true,
                        "completed": true,
                        "queued": false,
                        "objective": null,
                        "gap": null,
                        "runtime": 1.195,
                        "numberOfSolutions": 0,
                        "problemStatus": null,
                        "modelDataVersion": 0
                    }
                },
                "_scenarioAttachmentData": null,
                "_appAttachmentData": null,
                "_data": {
                    "demand_facility": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_facility",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": "DC 14"
                        }
                    },
                    "demand_product": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_product",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": "Shipment 1"
                        }
                    },
                    "demand_period": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_period",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": "Day 11"
                        }
                    },
                    "demand_mode": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_mode",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_enabled": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_enabled",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": true
                        }
                    },
                    "demand_basis": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_basis",
                        "_dimension": 0,
                        "_size": 499,
                        "_elementData": {
                            "1": "1"
                        }
                    },
                    "demand_value_distr": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_value_distr",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": "1"
                        }
                    },
                    "demand_min": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_min",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_max": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_max",
                        "_dimension": 0,
                        "_size": 1,
                        "_elementData": {
                            "4": 1000
                        }
                    },
                    "demand_unit_revenue": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_unit_revenue",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_unit_penal": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_unit_penal",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": 10000
                        }
                    },
                    "demand_user_note1": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note1",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note2": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note2",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note3": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note3",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note4": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note4",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note5": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note5",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note6": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note6",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note7": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note7",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note8": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note8",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note9": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note9",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note10": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note10",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "DEMAND_RECORDS": [
                        1
                    ],
                    "FACILITY_DISPLAY_NAMES": [
                        "DC 1"
                    ],
                    "PRODUCT_DISPLAY_NAMES": [
                        "Shipment 1"
                    ],
                    "PERIOD_DISPLAY_NAMES": [
                        "Day 1"
                    ],
                    "MODE_DISPLAY_NAMES": [
                        "Fast",
                        "Slow"
                    ],
                    "COST_BASIS_OPTIONS": [
                        "kg",
                        "Quantity"
                    ]
                },
                "_summaryData": {
                    "lastExecutionDate": 1674023686000,
                    "executionTime": 1.195,
                    "modelStatus": "OK",
                    "hasResultData": true,
                    "isLoaded": true,
                    "isDirty": true,
                    "state": "RESULTS_DIRTY",
                    "objective": null,
                    "gap": null,
                    "numberOfSolutions": 0,
                    "problemStatus": null
                },
                "_workflowData": null,
                "_allowedEntities": [
                    "demand_facility",
                    "demand_product",
                    "demand_period",
                    "demand_mode",
                    "demand_enabled",
                    "demand_basis",
                    "demand_value_distr",
                    "demand_min",
                    "demand_max",
                    "demand_unit_revenue",
                    "demand_unit_penal",
                    "demand_user_note1",
                    "demand_user_note2",
                    "demand_user_note3",
                    "demand_user_note4",
                    "demand_user_note5",
                    "demand_user_note6",
                    "demand_user_note7",
                    "demand_user_note8",
                    "demand_user_note9",
                    "demand_user_note10",
                    "DEMAND_RECORDS",
                    "FACILITY_DISPLAY_NAMES",
                    "PRODUCT_DISPLAY_NAMES",
                    "PERIOD_DISPLAY_NAMES",
                    "MODE_DISPLAY_NAMES",
                    "COST_BASIS_OPTIONS"
                ]
            },
            "visible": true,
            "id": "datagrid-column11",
            "bottomCalc": "sum",
            "headerTooltipFunc": "",
            "editorType": "input",
            "index": 9,
            "scenario": {
                "scenarioProps": {
                    "_data": {
                        "objectType": "SCENARIO",
                        "id": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "displayName": "tighter cap 100K",
                        "url": "/insightservices/rest/v1/data/scenario/d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "parent": {
                            "objectType": "PROJECT",
                            "id": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                            "displayName": "Supply Chain Solver",
                            "url": "/insightservices/rest/v1/data/project/cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2"
                        },
                        "project": {
                            "objectType": "PROJECT",
                            "id": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                            "displayName": "Supply Chain Solver",
                            "url": "/insightservices/rest/v1/data/project/cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2"
                        },
                        "path": "/Supply Chain Solver/tighter cap 100K",
                        "shareStatus": "PRIVATE",
                        "ownerId": "admin",
                        "loaded": true,
                        "modelStatus": "OK",
                        "hasResultData": true,
                        "scenarioType": "SCENARIO",
                        "projectId": "cebd1b49-8a72-4cc3-b4d0-4a135c6c56f2",
                        "creationDate": 1653672286000,
                        "lastExecutionDate": 1674023686000,
                        "workflowAssetId": null,
                        "workflowAssetName": null,
                        "workflowInitiatedId": null,
                        "workflowProcessId": null,
                        "workflowStage": null,
                        "notes": "",
                        "dirty": true,
                        "completed": true,
                        "queued": false,
                        "objective": null,
                        "gap": null,
                        "runtime": 1.195,
                        "numberOfSolutions": 0,
                        "problemStatus": null,
                        "modelDataVersion": 0
                    }
                },
                "_scenarioAttachmentData": null,
                "_appAttachmentData": null,
                "_data": {
                    "demand_facility": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_facility",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": "DC 14"
                        }
                    },
                    "demand_product": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_product",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": "Shipment 1"
                        }
                    },
                    "demand_period": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_period",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": "Day 11"
                        }
                    },
                    "demand_mode": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_mode",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_enabled": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_enabled",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": true
                        }
                    },
                    "demand_basis": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_basis",
                        "_dimension": 0,
                        "_size": 499,
                        "_elementData": {
                            "1": "1"
                        }
                    },
                    "demand_value_distr": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_value_distr",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": "1"
                        }
                    },
                    "demand_min": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_min",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_max": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_max",
                        "_dimension": 0,
                        "_size": 1,
                        "_elementData": {
                            "4": 1000
                        }
                    },
                    "demand_unit_revenue": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_unit_revenue",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_unit_penal": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_unit_penal",
                        "_dimension": 0,
                        "_size": 500,
                        "_elementData": {
                            "1": 10000
                        }
                    },
                    "demand_user_note1": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note1",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note2": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note2",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note3": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note3",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note4": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note4",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note5": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note5",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note6": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note6",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note7": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note7",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note8": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note8",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note9": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note9",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "demand_user_note10": {
                        "_scenarioId": "d84e80ae-df28-4bfe-8873-ec54a075e209",
                        "_entityName": "demand_user_note10",
                        "_dimension": 0,
                        "_size": 0,
                        "_elementData": {}
                    },
                    "DEMAND_RECORDS": [
                        1
                    ],
                    "FACILITY_DISPLAY_NAMES": [
                        "DC 1",
                    ],
                    "PRODUCT_DISPLAY_NAMES": [
                        "Shipment 1"
                    ],
                    "PERIOD_DISPLAY_NAMES": [
                        "Day 1"
                    ],
                    "MODE_DISPLAY_NAMES": [
                        "Fast",
                        "Slow"
                    ],
                    "COST_BASIS_OPTIONS": [
                        "kg",
                        "Quantity"
                    ]
                },
                "_summaryData": {
                    "lastExecutionDate": 1674023686000,
                    "executionTime": 1.195,
                    "modelStatus": "OK",
                    "hasResultData": true,
                    "isLoaded": true,
                    "isDirty": true,
                    "state": "RESULTS_DIRTY",
                    "objective": null,
                    "gap": null,
                    "numberOfSolutions": 0,
                    "problemStatus": null
                },
                "_workflowData": null,
                "_allowedEntities": [
                    "demand_facility",
                    "demand_product",
                    "demand_period",
                    "demand_mode",
                    "demand_enabled",
                    "demand_basis",
                    "demand_value_distr",
                    "demand_min",
                    "demand_max",
                    "demand_unit_revenue",
                    "demand_unit_penal",
                    "demand_user_note1",
                    "demand_user_note2",
                    "demand_user_note3",
                    "demand_user_note4",
                    "demand_user_note5",
                    "demand_user_note6",
                    "demand_user_note7",
                    "demand_user_note8",
                    "demand_user_note9",
                    "demand_user_note10",
                    "DEMAND_RECORDS",
                    "FACILITY_DISPLAY_NAMES",
                    "PRODUCT_DISPLAY_NAMES",
                    "PERIOD_DISPLAY_NAMES",
                    "MODE_DISPLAY_NAMES",
                    "COST_BASIS_OPTIONS"
                ]
            },
            "name": "demand_max",
            "field": "datagrid-column11",
            "cssClass": "numeric",
            "editor": "input",
            "dataType": "ARRAY",
            "elementType": "REAL",
            "headerFilterPlaceholder": "No Filter",
            "headerFilter": "input"
        }
    },
    getDefinition: function(){
        return this._column.definition;
    }
}