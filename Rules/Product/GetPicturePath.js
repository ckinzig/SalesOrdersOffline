import ProductPicture from './ProductPicture';

export default function GetPicturePath(context) {
	var binding = context.getBindingObject();
	if (ProductPicture.isFileExist(context, binding.ProductId)) {
		let file = ProductPicture.getFile(context, binding.ProductId);
		return file.path;
	} else {
		return 'res://icon.png';
	}
}