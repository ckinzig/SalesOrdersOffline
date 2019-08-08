import SetSyncInProgressState from './SetSyncInProgressState';
import IsSyncInProgress from './IsSyncInProgress';

export default function ApplicationOnSync(clientAPI) {
	if (!IsSyncInProgress(clientAPI)) {
		return clientAPI.executeAction('/SalesOrdersOffline/Actions/Service/SyncInitializeMessage.action').then(function () {
			SetSyncInProgressState(clientAPI, true);
			return clientAPI.executeAction('/SalesOrdersOffline/Actions/Service/UploadOfflineData.action');
		})
	} else {
		return clientAPI.executeAction('/SalesOrdersOffline/Actions/Service/SyncInProgress.action');
	}
}