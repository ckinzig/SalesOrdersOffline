import CommonLibrary from './../Common/Library/CommonLibrary';
import GetDetailsNavQueryOption from './../Common/GetDetailsNavQueryOption';

export default function ErrorArchiveDetailsNav(context) {
	var pageProxy = context.getPageProxy();
	var binding = pageProxy.getActionBinding();

	// Create an error object, and store the error's info into this object. And save this into ClientData
	var errorObject = {
		'Message': binding.Message,
		'RequestBody': binding.RequestBody,
		'RequestURL': binding.RequestURL,
		'HTTPStatusCode': binding.HTTPStatusCode,
		'RequestMethod': binding.RequestMethod
	};
	pageProxy.getClientData().ErrorObject = errorObject;

	var oDataType = '';
	var readLink = '';
	if (binding.AffectedEntity) {
		oDataType = binding.AffectedEntity['@odata.type'];
		readLink = binding.AffectedEntity['@odata.readLink'];
	} else {
		var entitySet = CommonLibrary.getEntitySetFromReadLink(binding.RequestURL.substring(1));
		oDataType = '#ESPM.' + entitySet;
		readLink = binding.RequestURL.substring(1);
	}

	var queryOption = GetDetailsNavQueryOption(oDataType);

	if (binding.RequestMethod == 'DELETE') {
		pageProxy.setActionBinding({
			'ErrorObject': errorObject
		});
		return pageProxy.executeAction('/SalesOrdersOffline/Actions/ErrorArchive/NavToErrorArchiveDetails.action');
	}

	return context.read('/SalesOrdersOffline/Services/SampleSrv.service', readLink, [], queryOption).then(function (result) {
		if (result && result.length) {
			var resultItem = result.getItem(0);
			resultItem.ErrorObject = errorObject;
			pageProxy.setActionBinding(resultItem);
			return pageProxy.executeAction('/SalesOrdersOffline/Actions/ErrorArchive/NavToErrorArchiveDetails.action');
		} else {
			return Promise.resolve(false);
		}
	});
}