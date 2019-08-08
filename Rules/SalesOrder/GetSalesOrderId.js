export default function GetSalesOrderId(context) {
	if (context.binding && context.binding.SalesOrderId) {
		return context.binding.SalesOrderId;
	}
	return null;
}