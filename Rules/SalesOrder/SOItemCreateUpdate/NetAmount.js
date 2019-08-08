import SalesOrder from './../SalesOrder';

export default function NetAmount(context) {
	var quantity = context.evaluateTargetPath('#Control:SimplePropertyQuantity/#Value');
	var product = SalesOrder.getItemProduct(context);
	return SalesOrder.getAmounts(product.Price, quantity).net;
}