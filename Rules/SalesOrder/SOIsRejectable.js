import SalesOrder from './SalesOrder';

export default function SOIsRejectable(context) {
	return SalesOrder.isSalesOrderRejectable(context.getPageProxy().binding.LifeCycleStatus);
}