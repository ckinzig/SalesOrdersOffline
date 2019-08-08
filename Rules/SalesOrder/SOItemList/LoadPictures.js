import ProductPicture from './../../Product/ProductPicture';
import QueryOptions from './QueryOptions';

export default function LoadPictures(context) {
	var query = QueryOptions(context, true);
	return context.read('/SalesOrdersOffline/Services/SampleSrv.service', 'SalesOrderItems', [], query).then(function (result) {
		var products = [];
		for (var i = 0; i < result.length; i++) {
			var product = result.getItem(i).ProductDetails;
			if (!ProductPicture.isFileExist(context, product.ProductId)) {
				products.push(product);
			}
		}
		return ProductPicture.downloadPictures(context, products);
	});
}