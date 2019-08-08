import CommonLibrary from './../Library/CommonLibrary';

export default function CreateEntitySuccess(context) {
	if (!CommonLibrary.isOnChangeset(context)) {
		return context.executeAction('/SalesOrdersOffline/Actions/CreateUpdateDelete/CreateEntitySuccess.action');
	} else {
		return context.executeAction('/SalesOrdersOffline/Actions/ClosePage.action');
	}
}