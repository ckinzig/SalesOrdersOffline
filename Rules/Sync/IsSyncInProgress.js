import CommonLibrary from './../Common/Library/CommonLibrary';

export default function IsSyncInProgress(context) {
	return CommonLibrary.getStateVariable(context, 'SyncInProgress');
}