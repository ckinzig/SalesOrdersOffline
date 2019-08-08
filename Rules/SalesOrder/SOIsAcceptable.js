import SalesOrder from './SalesOrder';

export default function SOIsAcceptable(context) {
	return SalesOrder.isSalesOrderAcceptable(context.getPageProxy().binding.LifeCycleStatus);
}