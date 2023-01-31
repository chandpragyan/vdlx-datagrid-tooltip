import * as transform from '../../../src/js/vdlx-datagrid-column/transform';
import {paramsBuilder, cellAttribute, headerAttribute, cellElement, headerElement, api} from '../../jest/mocks/transform-mock';
describe('columnConfig module', () => {
	describe('tooltipConfig', () => {
		describe('cell level tooltip', () => {
           
			it('to check for headertooltipFunc as expression', () => {
                let paramBuilderHeaderExpression = jest.spyOn(paramsBuilder, 'addRawOrExpressionParam').mockImplementation();
                paramsBuilder.addRawOrExpressionParam('headerTooltipFunc', headerAttribute.headerTooltipFunc.expression.value ,['data','entity']);
                transform.default(headerElement, headerAttribute, api)
                expect(headerAttribute.headerTooltipFunc).not.toBeUndefined();
                expect(headerAttribute.headerTooltipFunc.expression.isString).toBeFalsy();
				expect(paramBuilderHeaderExpression).toHaveBeenCalled();
			});

            it('to check for celltooltipFunc as expression', () => {
                let paramBuilderCellExpression = jest.spyOn(paramsBuilder, 'addFunctionOrExpressionParam').mockImplementation();
                paramsBuilder.addFunctionOrExpressionParam('cellTooltipFunc', cellAttribute.cellTooltipFunc.expression.value ,['data','entity']);
                transform.default(cellElement, cellAttribute, api)
                expect(cellAttribute.cellTooltipFunc).not.toBeUndefined();
                expect(cellAttribute.cellTooltipFunc.expression.isString).toBeFalsy();
				expect(paramBuilderCellExpression).toHaveBeenCalled();
			});
			
		});
	});
});
