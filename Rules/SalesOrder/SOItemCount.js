import CommonLibrary from './../Common/Library/CommonLibrary';

export default function SOItemCount(context) {
	var readLink = context.getPageProxy().binding['@odata.readLink'];
	return CommonLibrary.getEntitySetCount(context, readLink + '/Items', '');
}