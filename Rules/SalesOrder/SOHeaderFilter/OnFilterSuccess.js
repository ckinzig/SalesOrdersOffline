import SalesOrder from './../SalesOrder';

export default function OnFilterSuccess(context) {
	SalesOrder.setSOHeaderFilterQuery(context, context.actionResults.filterResult.data.filter);
}