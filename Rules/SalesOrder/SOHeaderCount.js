import CommonLibrary from './../Common/Library/CommonLibrary';
import SalesOrder from './SalesOrder';

export default function SOHeaderCount(context) {
	var params = [];
	return CommonLibrary.getEntitySetCount(context, 'SalesOrderHeaders', '').then(function (totalCount) {
		return CommonLibrary.getEntitySetCount(context, 'SalesOrderHeaders', SalesOrder.getSOHeaderFilterQuery(context)).then(function (count) {
			return {
				'totalCount': totalCount,
				'filterCount': count
			};
		});
	});
}