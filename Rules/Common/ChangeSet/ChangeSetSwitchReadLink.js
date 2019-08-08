import CommonLibrary from './../Library/CommonLibrary';

export default function ChangesetSwitchReadLink(context) {
	if (context.binding && context.binding['@odata.readLink']) {
		return context.binding['@odata.readLink'];
	} else if (CommonLibrary.isOnChangeset(context)) {
		return 'pending_1'; // temporary @odata.readLink
	}
	return '';
}