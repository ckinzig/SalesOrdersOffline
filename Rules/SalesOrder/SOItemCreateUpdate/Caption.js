import CommonLibrary from './../../Common/Library/CommonLibrary';

export default function Caption(context) {
	if (CommonLibrary.IsOnCreate(context)) {
		return context.localizeText('itemCreate');
	} else {
		return context.localizeText('itemUpdate');
	}
}