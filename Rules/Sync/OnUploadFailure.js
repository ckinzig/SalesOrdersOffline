import SetSyncInProgressState from './SetSyncInProgressState';

export default function OnUploadFailure(context) {
	SetSyncInProgressState(context, false);
	return context.executeAction('/SalesOrdersOffline/Actions/Service/ServiceFailure.action');
}