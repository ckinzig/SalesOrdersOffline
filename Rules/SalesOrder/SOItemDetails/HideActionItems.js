import FetchRequest from './../../Common/Query/FetchRequest';
import SalesOrder from './../SalesOrder';
import HideActionItemsCommon from './../../Common/HideActionItems';

export default function HideActionItems(context) {
	return new FetchRequest('SalesOrderHeaders').get(context, context.binding.SalesOrderId).then(function (result) {
		if (!SalesOrder.isSalesOrderEditable(result.getItem(0).LifeCycleStatus)) {
			HideActionItemsCommon(context, 2);
		}
	});
}