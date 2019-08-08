import CommonLibrary from './../Common/Library/CommonLibrary';
import ValidationLibrary from './../Common/Library/ValidationLibrary';

export default function SOItemCreateItemNumber(context) {
	if (CommonLibrary.isOnChangeset(context)) {
		return 10;
	}
	
	var query = '$filter=SalesOrderId%20eq%20\'' + context.getBindingObject().SalesOrderId + '\'&$orderby=ItemNumber%20desc';
	return context.read('/SalesOrdersOffline/Services/SampleSrv.service', 'SalesOrderItems', [], query).then(function (result) {
		if (!ValidationLibrary.evalIsEmpty(result)) {
			var newItemNumber = parseInt(result.getItem(0).ItemNumber);
			return newItemNumber - (newItemNumber % 10) + 10;
		} else {
			return 10;
		}
	});
}