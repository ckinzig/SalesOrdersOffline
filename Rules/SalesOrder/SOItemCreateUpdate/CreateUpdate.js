import CommonLibrary from './../../Common/Library/CommonLibrary';

export default function CreateUpdate(context) {
	if (CommonLibrary.IsOnCreate(context)) {
		return context.executeAction('/SalesOrdersOffline/Actions/SalesOrder/CreateUpdateDelete/SOItemCreate.action');
	} else {
		return context.executeAction('/SalesOrdersOffline/Actions/SalesOrder/CreateUpdateDelete/SOItemUpdate.action');
	}
}