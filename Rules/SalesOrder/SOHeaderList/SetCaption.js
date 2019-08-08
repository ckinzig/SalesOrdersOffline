import SOHeaderCount from './../SOHeaderCount';

export default function SetCaption(context) {
	return SOHeaderCount(context).then(function (count) {
		var params = [];
		params.push(count.filterCount);
		params.push(count.totalCount);
		if (count.filterCount === count.totalCount) {
			return context.setCaption(context.localizeText('salesOrders_x', [count.totalCount]));
		}
		return context.setCaption(context.localizeText('salesOrders_x_x', params));
	});
}