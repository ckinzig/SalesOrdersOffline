export default function QueryOptions(context, urlEncode = false) {
	var salesOrderId = context.evaluateTargetPath('#Property:SalesOrderId');
	if (urlEncode) {
		return '$filter=SalesOrderId%20eq%20\'' + salesOrderId + '\'&$expand=ProductDetails&$orderby=ItemNumber';
	} else {
		return '$filter=SalesOrderId eq \'' + salesOrderId + '\'&$expand=ProductDetails&$orderby=ItemNumber';
	}
}