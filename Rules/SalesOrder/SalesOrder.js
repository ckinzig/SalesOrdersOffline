import CommonLibrary from './../Common/Library/CommonLibrary';

export default class {
	static getAmounts(price, quantity, tax = 0.19) {
		var Amounts = {
			net: 0.0,
			gross: 0.0,
			tax: 0.0
		};

		if (price && quantity) {
			Amounts.net = CommonLibrary.financial(quantity * price, 3);
			Amounts.tax = CommonLibrary.financial(Amounts.net * tax, 3);
			Amounts.gross = CommonLibrary.financial(Number.parseFloat(Amounts.net) + Number.parseFloat(Amounts.tax), 3);
		}
		return Amounts;
	}

	static setSOHeaderFilterQuery(clientAPI, filterQuery) {
		CommonLibrary.setStateVariable(clientAPI, 'SOHeaderFilterQuery', filterQuery);
	}

	static getSOHeaderFilterQuery(clientAPI) {
		return CommonLibrary.getStateVariable(clientAPI, 'SOHeaderFilterQuery');
	}

	static setItemProduct(clientAPI, product) {
		CommonLibrary.setStateVariable(clientAPI, 'Product', product, 'SOItemCreateUpdate');
	}

	static getItemProduct(clientAPI) {
		return CommonLibrary.getStateVariable(clientAPI, 'Product', 'SOItemCreateUpdate');
	}

	static clearItemProduct(clientAPI) {
		CommonLibrary.clearStateVariable(clientAPI, 'Product', 'SOItemCreateUpdate');
	}

	static SOItemCreateUpdateValidation(context) {
		CommonLibrary.clearValidationForPage(context);

		var dict = CommonLibrary.getControlDictionaryFromPage(context);
		var valPromises = [];
		valPromises.push(this.QuantityValidation(context, dict.SimplePropertyQuantity));
		valPromises.push(this.DeliveryDateValidation(context, dict.DatePickerDeliveryDate));

		return Promise.all(valPromises).then(function (results) {
			var pass = results.reduce(function (total, value) {
				return total && value;
			});
			if (!pass) {
				throw false;
			}
			return true;
		}).catch(function () {
			var container = context.getControl('FormCellContainer');
			container.redraw();
			return false;
		});
	}

	static QuantityValidation(context, control) {
		control.clearValidation();
		var quantity = Number(control.getValue());
		var message = '';

		if (!Number.isInteger(quantity)) {
			message = context.localizeText('quantityIsIntegerValidation');
		} else if (quantity <= 0) {
			message = context.localizeText('quantityGreaterThanZeroValidation');
		}

		if (message) {
			CommonLibrary.executeInlineControlError(context, control, message);
			return Promise.reject(false);
		} else {
			return Promise.resolve(true);
		}
	}

	static DeliveryDateValidation(context, control) {
		control.clearValidation();
		var deliveryDate = control.getValue();
		var today = new Date();
		today = today.setHours(0, 0, 0, 0);

		if (deliveryDate < today) {
			var message = context.localizeText('deliveryDateIsInTheFutureValidation');
			CommonLibrary.executeInlineControlError(context, control, message);
			return Promise.reject(false);
		} else {
			return Promise.resolve(true);
		}
	}

	static isSalesOrderEditable(lifeCycleStatus) {
		if (lifeCycleStatus == 'N') {
			return true;
		}
		return false;
	}

	static isSalesOrderAcceptable(lifeCycleStatus) {
		if (lifeCycleStatus == 'N' || lifeCycleStatus == 'R') {
			return true;
		}
		return false;
	}

	static isSalesOrderRejectable(lifeCycleStatus) {
		if (lifeCycleStatus == 'N' || lifeCycleStatus == 'A') {
			return true;
		}
		return false;
	}
}