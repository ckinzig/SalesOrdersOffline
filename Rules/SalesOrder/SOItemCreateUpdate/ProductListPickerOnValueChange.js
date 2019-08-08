import CommonLibrary from './../../Common/Library/CommonLibrary';
import SalesOrder from './../SalesOrder';

export default function ProductListPickerOnValueChange(context) {
	var productId = CommonLibrary.getListPickerValue(context.getValue());
	var pageProxy = context.getPageProxy();
	var quantityUnitCtrl = pageProxy.getControl('FormCellContainer').getControl('SimplePropertyQuantityUnit');

	if (productId) {
		var filter = '$filter=ProductId%20eq%20\'' + productId + '\'';
		return context.read('/SalesOrdersOffline/Services/SampleSrv.service', 'Products', [], filter).then(function (products) {
			SalesOrder.setItemProduct(pageProxy, products.getItem(0));
			quantityUnitCtrl.setValue(products.getItem(0).QuantityUnit);
		});
	} else {
		SalesOrder.clearItemProduct(pageProxy);
		quantityUnitCtrl.setValue('');
	}
}