import CommonLibrary from './../Common/Library/CommonLibrary';

export default function SetSyncInProgressState(context, flag) {
	return CommonLibrary.setStateVariable(context, 'SyncInProgress', flag);
}