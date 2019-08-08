export default function OnWillUpdate(clientAPI) {
	let dialogs = clientAPI.nativescript.uiDialogsModule;
	let updateQuestion = clientAPI.localizeText('updateQuestion');
	return dialogs.confirm(updateQuestion).then((result) => {
		console.log(updateQuestion + result);
		if (result === true) {
			return Promise.resolve();
		} else {
			return Promise.reject('User Deferred');
		}
	});
}