export default class {
	static printObject(o) {
		if (o === undefined) {
			return o;
		}
		if (typeof o !== 'object') {
			return o.toString();
		}
		var value, result = '';
		for (var p in o) {
			if (typeof o[p] === 'function') {
				result += p + '()' + '\n';
			} else if (typeof o[p] === 'object') {
				result += p + '={}' + '\n';
			} else {
				result += p + '=' + o[p] + '\n';
			}
		}
		return result;
	}

	static showMessage(clientAPI, message) {
		clientAPI.nativescript.uiDialogsModule.alert({
			title: "Helper",
			message: message,
			okButtonText: "Ok"
		});
	}
}