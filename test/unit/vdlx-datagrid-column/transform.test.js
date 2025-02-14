import '../../jest/mocks/console-globals'
import * as transform from '../../../src/js/vdlx-datagrid-column/transform';
import {paramsBuilder, cellAttribute, headerAttribute, cellElement, headerElement, api} from '../../jest/mocks/transform-mock';
describe('columnConfig module', () => {
	describe('tooltipConfig', () => {
		describe('cell level tooltip', () => {

            it('to check for celltooltipFunc as expression', () => {
                let paramBuilderCellExpression = jest.spyOn(paramsBuilder, 'addFunctionOrExpressionParam').mockImplementation();
                paramsBuilder.addFunctionOrExpressionParam('cellTooltipFunc', cellAttribute['cell-tooltip-func'].expression.value ,['data','entity']);
                transform.default(cellElement, cellAttribute, api)
                expect(cellAttribute['cell-tooltip-func']).not.toBeUndefined();
                expect(cellAttribute['cell-tooltip-func'].expression.isString).toBeFalsy();
				expect(paramBuilderCellExpression).toHaveBeenCalled();
			});

            it('to check for cell tooltip as a string',()=>{
                cellAttribute.tooltip.expression.isString = true;
                let paramBuilder = jest.spyOn(paramsBuilder, 'addParam').mockImplementation();
                paramsBuilder.addParam('tooltip', cellAttribute.tooltip.rawValue, false);
                transform.default(cellElement, cellAttribute, api)
                expect(paramBuilder).toHaveBeenCalled();
            });
            
			it('to check for headertooltipFunc as expression', () => {
                let paramBuilderHeaderExpression = jest.spyOn(paramsBuilder, 'addRawOrExpressionParam').mockImplementation();
                paramsBuilder.addRawOrExpressionParam('headerTooltipFunc', headerAttribute['header-tooltip-func'].expression.value ,['data','entity']);
                transform.default(headerElement, headerAttribute, api)
                expect(headerAttribute['header-tooltip-func']).not.toBeUndefined();
                expect(headerAttribute['header-tooltip-func'].expression.isString).toBeFalsy();
				expect(paramBuilderHeaderExpression).toHaveBeenCalled();
			});

            it('to check for header tooltip as a string',()=>{
                headerAttribute['header-tooltip'].expression.isString = true;
                let paramBuilder = jest.spyOn(paramsBuilder, 'addParam').mockImplementation();
                paramsBuilder.addParam('headerTooltip', headerAttribute['header-tooltip'].rawValue, false);
                transform.default(cellElement, headerAttribute, api)
                expect(paramBuilder).toHaveBeenCalled();
            })
		});
	});
});
