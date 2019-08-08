import ValidationLibrary from './../Common/Library/ValidationLibrary';

export default class {
	static getErrorMessage(binding) {
		try {
			var message = JSON.parse(binding.Message);
			return message.error.message;
		} catch (e) {
			if (!ValidationLibrary.evalIsEmpty(binding.Message)) {
				return binding.Message;
			} else {
				return '-';
			}
		}
	}
}