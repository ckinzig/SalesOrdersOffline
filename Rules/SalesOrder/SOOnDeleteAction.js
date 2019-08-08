import CommonLibrary from './../Common/Library/CommonLibrary';

export default function SODeleteAction(context) {
	var deleteEntityMessage = context.localizeText('deleteEntityMessage');
	var deleteEntityTitle = context.localizeText('confirmDeletion');
	
	//finding object type. Using split as the data is coming as "@sap_mobile.EntityName"
	var entityName = context.binding['@odata.type'].split('.')[1];
	var action = Promise.resolve();
	return CommonLibrary.showWarningDialog(context, deleteEntityMessage, deleteEntityTitle).then(function(successResult) {
		if (successResult === true) {
			switch (entityName) {
				case 'SalesOrderHeader':
					action = context.executeAction('/SalesOrdersOffline/Actions/SalesOrder/CreateUpdateDelete/SOHeaderDelete.action');
					break;
				case 'SalesOrderItem':
					action = context.executeAction('/SalesOrdersOffline/Actions/SalesOrder/CreateUpdateDelete/SOItemDelete.action');
					break;
				default:
					break;
			}
		}
		return action;
	});
}