import CommonLibrary from './Library/CommonLibrary';
import ProductPicture from './../Product/ProductPicture';

export default function ResetAlertAction(clientAPI) {
	var messageText = clientAPI.localizeText('resetApplicationMessage');
	var captionText = clientAPI.localizeText('confirmReset');

	return CommonLibrary.showWarningDialog(clientAPI, messageText, captionText).then(function (result) {
		if (result === true) {
			//Delete resources
			ProductPicture.deletePictures(clientAPI);
			//Logout
			clientAPI.executeAction('/SalesOrdersOffline/Actions/User/ResetUser.action');
		}
	});
}
