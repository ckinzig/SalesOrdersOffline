export default class ProductPicture {
	static getPicturePath() {
		return 'res://icon.png';
	}

	static getFileName(productId) {
		return productId + '.jpg';
	}

	static getFolder(context) {
		const fs = context.nativescript.fileSystemModule;
		return fs.knownFolders.temp().getFolder("ProductPictures");
	}

	static getFile(context, productId) {
		const folder = this.getFolder(context);
		const file = folder.getFile(this.getFileName(productId));
		return file;
	}

	static isFileExist(context, productId) {
		const folder = this.getFolder(context);
		return folder.contains(this.getFileName(productId));
	}

	static downloadPicture(pageProxy, productId, readLink) {
		var _this = this;
		var binding = {};
		binding.productId = productId;
		binding['@odata.readLink'] = readLink;
		pageProxy.setActionBinding(binding);
		return pageProxy.executeAction('/SalesOrdersOffline/Actions/Product/DownloadProductPicture.action').then(function (result) {
			var file = _this.getFile(pageProxy, productId);
			file.writeSync(result.data);
			delete pageProxy._clientAPIProps().actionBinding;
		});
	}

	static downloadPictures(pageProxy, products) {
		var _this = this;
		var sequence = Promise.resolve();
		for (var i = 0; i < products.length; i++) {
			let product = products[i]
			sequence = sequence.then(function () {
				return _this.downloadPicture(pageProxy, product.ProductId, product['@odata.readLink']);
			});
		}
		return sequence;
	}

	static deletePictures(context) {
		this.getFolder(context).clear();
	}
}