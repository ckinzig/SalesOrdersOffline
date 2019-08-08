import SalesOrder from './../SalesOrder';
import HideActionItemsCommon from './../../Common/HideActionItems';

export default function HideActionItems(context) {
	if (!SalesOrder.isSalesOrderEditable(context.binding.LifeCycleStatus)) {
		HideActionItemsCommon(context);
	}
}