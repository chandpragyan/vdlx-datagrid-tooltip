import { createProps } from '../../../src/js/vdlx-datagrid-column/create-column-props';
import {cell, headerCell} from '../../jest/mocks/vdlx-datagrid-column-mock';
describe('columnConfig module', () => {
	describe('tooltipConfig', () => {
		describe('cell level tooltip', () => {
			let params;
			beforeEach(()=>{
			params = {
				scenario: '1',
				title: '',
				width: '',
				editable: 'false',
				visible: 'false',
				style: '',
				sortByFormatted: '',
				filterByFormatted: '',
				disableSetSorting: '',
				editorOptionsSet: '',
				selectNull: '',
				checkedValue: '',
				uncheckedValue: '',
				id: 1,
				bottomCalc: '',
				sortOrder: '',
				sortDirection: '',
				tooltip: true,
				cellTooltipFunc: undefined,
				headerTooltip: '',
				headerTooltipFunc:'',
			}
			})
			it('To check cell level tooltip is initiated', () => {
				let expectedValue = 'ID: 10';
				 createProps(1,params).tooltip(cell);
				 expect(cell.getColumn().getDefinition().title + ": " + cell.getData()[cell.getColumn().getField()]).toEqual(expectedValue);
			});
			
			it('tooltip when field is defined', () => {
				var expectedValue = "SUM(Unit Penalty): 20000\nFacility: DC 10";
				let expectedEntityName = 'demand_facility';
				params.tooltip = true;
				params.cellTooltipFunc = function(){
					return ['SUM(Unit Penalty): 20000', ['demand_facility']]
				}
				let strTooltip = createProps(1,params).tooltip(cell);
				expect(cell.getTable().getColumns()[0].getDefinition().name).toEqual(expectedEntityName);
				expect(cell.getData()[cell.getTable().getColumns()[0].getField()]).not.toBeUndefined;
				expect(strTooltip).toMatch(expectedValue);
			});

			it('tooltip when field is blank', () => {
				var expectedValue = "SUM(Unit Penalty): 20000\nFacility: N/A";
				let expectedEntityName = 'demand_facility';
				params.tooltip = true;
				params.cellTooltipFunc = function(){
					return ['SUM(Unit Penalty): 20000', ['demand_facility']]
				}
				cell.getRow().update({'datagrid-column3':''})
				let strTooltip = createProps(1,params).tooltip(cell);
				expect(cell.getTable().getColumns()[0].getDefinition().name).toEqual(expectedEntityName);
				expect(cell.getData()[cell.getTable().getColumns()[0].getField()]).toEqual('');
				expect(strTooltip).toMatch(expectedValue);
			});
			it('tooltip when static string to be displayed', () => {
				let expectedValue = 'This is tooltip string test';
				params.tooltip = 'This is tooltip string test';
				let strTooltip = createProps(1,params).tooltip(cell);
				expect(strTooltip).toEqual(expectedValue);
			});
		});

		describe('header level tooltip', () => {
			let params;
			beforeEach(()=>{
			params = {
				scenario: '1',
				title: '',
				width: '',
				editable: 'false',
				visible: 'false',
				style: '',
				sortByFormatted: '',
				filterByFormatted: '',
				disableSetSorting: '',
				editorOptionsSet: '',
				selectNull: '',
				checkedValue: '',
				uncheckedValue: '',
				id: 9,
				bottomCalc: '',
				sortOrder: '',
				sortDirection: '',
				tooltip: '',
				headerTooltip: true,
				headerTooltipFunc:'',
			}
			})
			it('To check header level tooltip is initiated', () => {
				let expectedValue = "SUM(Unit Penalty): 4992000\nMIN(Unit Penalty): 2000";
				params.headerTooltip = true;
				params.headerTooltipFunc = function(){
					return "SUM(Unit Penalty): 4992000\nMIN(Unit Penalty): 2000"
				}
				let headerStringTooltip = createProps(1,params).headerTooltip(headerCell);
				expect(headerStringTooltip).toMatch(expectedValue);
			});
			it('when no calculated value at header level tooltip ', () => {
				let expectedValue = "Max Demand";
				params.headerTooltip = true;
				params.headerTooltipFunc = undefined;
				let headerStringTooltip = createProps(1,params).headerTooltip(headerCell);
				expect(headerStringTooltip).toMatch(expectedValue);
			});

			it('header tooltip when static string to be displayed', () => {
				let expectedValue = "This is the test string for header tooltip";
				params.headerTooltip = "This is the test string for header tooltip";
				params.headerTooltipFunc = undefined;
				let headerStringTooltip = createProps(1,params).headerTooltip(headerCell);
				expect(headerStringTooltip).toMatch(expectedValue);
			});
		});
	});
});
