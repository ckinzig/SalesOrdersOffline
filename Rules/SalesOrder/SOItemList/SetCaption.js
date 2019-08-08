import SOItemCount from './../SOItemCount';

export default function SetCaption(context) {
	return SOItemCount(context.getControls()[0]).then(function (count) {
		return context.setCaption(context.localizeText('items_x', [count]));
	});
}