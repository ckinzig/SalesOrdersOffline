export default function GetCustomerNameFromId(context) {
	var binding = context.binding;
	var entity = "Customers('" + binding.CustomerId + "')";
	//var entity = binding['@odata.readLink'];
	var query = '';
	//var query = '$expand=CustomerDetails';
	return context.read('/SalesOrdersOffline/Services/SampleSrv.service', entity, [], query).then(function (
		result) {
		var customer = result.getItem(0);
		//var customer = result.getItem(0).CustomerDetails;
		return customer.FirstName + ' ' + customer.LastName;
	}).catch(function (error) {
		alert(error);
	});
}