import CommonLibrary from './../Common/Library/CommonLibrary';
import SetSyncInProgressState from './SetSyncInProgressState';

export default function CheckForSyncErrorsAfterDownloadFailure(context) {
	SetSyncInProgressState(context, false);
	return CommonLibrary.getEntitySetCount(context, 'ErrorArchive', '').then(function (result) {
		if (result > 0) {
			context.executeAction('/SalesOrdersOffline/Actions/Service/SyncFailure.action');
		} else {
			context.executeAction('/SalesOrdersOffline/Actions/Service/SyncSuccess.action');
		}
	});
}