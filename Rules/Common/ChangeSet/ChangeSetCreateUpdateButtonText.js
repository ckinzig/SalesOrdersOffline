import CommonLibrary from './../Library/CommonLibrary';

export default function ChangeSetCreateUpdateButtonText(context) {
	return CommonLibrary.isOnChangeset(context) ? context.localizeText('next') : context.localizeText('save');
}