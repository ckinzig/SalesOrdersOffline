import SetSyncInProgressState from './SetSyncInProgressState';

export default function InitializeSyncState(context) {
	return SetSyncInProgressState(context, false);
}