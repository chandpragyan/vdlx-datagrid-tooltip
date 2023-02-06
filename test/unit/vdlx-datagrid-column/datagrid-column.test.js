import { createProps } from '../../../src/js/vdlx-datagrid-column/create-column-props';
import {params} from '../../jest/mocks/vdlx-datagrid-column-mock';
describe('columnConfig module', () => {
	describe('tooltipConfig', () => {
		describe('cell level tooltip', () => {
			it('To check cell level tooltip is initiated', () => {
				var result = createProps(1, params);
				expect(result.tooltip).toBe.Function;
			});
			it('To check header level tooltip is initiated', () => {
				var result = createProps(1, params);
				expect(result.headerTooltip).toBe.Function;
			})
		});
	});
});
