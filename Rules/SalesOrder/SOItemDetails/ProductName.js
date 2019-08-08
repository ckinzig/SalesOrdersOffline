import Helper from './../../Common/Library/Helper';
export default function ProductName(context) {
	alert(Helper.printObject(context.getPageProxy().binding) + '\n' + Helper.printObject(context.getPageProxy().binding.ProductDetails));
	return context.getPageProxy().binding.ProductDetails.Name;
}