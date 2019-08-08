import SalesOrder from './../SalesOrder';

export default function Validation(context) {
	return SalesOrder.SOItemCreateUpdateValidation(context).then(function (result) {
		return result;
	});
}