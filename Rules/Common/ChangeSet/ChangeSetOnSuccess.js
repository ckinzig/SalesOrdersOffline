import CommonLibrary from './../Library/CommonLibrary';

export default function ChangeSetOnSuccess(context) {
	CommonLibrary.setOnChangesetFlag(context, false);
	return context.executeAction('/SalesOrdersOffline/Actions/CreateUpdateDelete/CreateEntitySuccessNoClosePage.action');
}