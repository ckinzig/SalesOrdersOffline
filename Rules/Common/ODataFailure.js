import CommonLibrary from './Library/CommonLibrary';

export default function ODataFailure(context) {
	var error = '';
	try {
		error += '\n' + CommonLibrary.getActionResultError(context, 'result');
	} catch (actionResultError) {
		// do nothing
	}
	return context.localizeText('serviceUnavailable') + error;
}