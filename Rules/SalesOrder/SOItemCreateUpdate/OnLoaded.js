import CommonLibrary from './../../Common/Library/CommonLibrary';
import SalesOrder from './../SalesOrder';

export default function OnLoaded(context) {
	if (!CommonLibrary.IsOnCreate(context)) {
		SalesOrder.setItemProduct(context, context.binding.ProductDetails);
	}
}