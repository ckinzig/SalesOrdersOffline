export default function CountryFilter(context) {

	var filterObj = {
		name: 'CustomerDetails/Country',
		values: []
	};
	var filterValues = [];

	return context.read('/SalesOrdersOffline/Services/SampleSrv.service', 'SalesOrderHeaders', [], '$expand=CustomerDetails').then(function (data) {
		if (data.length > 0) {
			for (var i = 0; i < data.length; i++) {
				var item = data.getItem(i);
				var returnValue = item.CustomerDetails.Country;
				var displayValue = item.CustomerDetails.Country;
				var obj = {
					ReturnValue: returnValue,
					DisplayValue: displayValue
				};
				if (!filterValues.includes(displayValue)) {
					filterValues.push(displayValue);
					filterObj.values.push(obj);
				}
			}
		}
		return filterObj;
	}, function () {
		return {
			name: 'Failed',
			values: []
		};
	});
}