export default function Test(context) {
	var section = context.getName();
	var property = context.getProperty();
	var binding = context.binding
	var value = '';
	var params = [];

	switch (section) {
	case 'SalesOrderHeader':
		switch (property) {
		case 'Footnote':
			// instead of: $(L,'cityCountry',{{#Property:CustomerDetails/#Property:City}},{{#Property:CustomerDetails/#Property:Country}})
			params.push(binding.CustomerDetails.City);
			params.push(binding.CustomerDetails.Country);
			value = context.localizeText('cityCountry', params);
			break;
		case 'HeadlineText':
			// instead of: $(L,'fullName',{{#Property:CustomerDetails/#Property:LastName}},{{#Property:CustomerDetails/#Property:FirstName}})
			params.push(binding.CustomerDetails.LastName);
			params.push(binding.CustomerDetails.FirstName);
			value = context.localizeText('fullName', params);
			break;
		default:
			break;
		}
		break;

	case 'Customer':
		switch (property) {
		case 'Description':
			// instead of: $(L,'fullAddress',{{#Property:CustomerDetails/#Property:Street}},{{#Property:CustomerDetails/#Property:HouseNumber}},{{#Property:CustomerDetails/#Property:PostalCode}},{{#Property:CustomerDetails/#Property:City}},{{#Property:CustomerDetails/#Property:Country}})
			params.push(binding.CustomerDetails.Street);
			params.push(binding.CustomerDetails.HouseNumber);
			params.push(binding.CustomerDetails.PostalCode);
			params.push(binding.CustomerDetails.City);
			params.push(binding.CustomerDetails.Country);
			value = context.localizeText('fullAddress', params);
			break;
		case 'Headline':
			// instead of: $(L,'fullName',{{#Property:CustomerDetails/#Property:LastName}},{{#Property:CustomerDetails/#Property:FirstName}})
			params.push(binding.CustomerDetails.LastName);
			params.push(binding.CustomerDetails.FirstName);
			value = context.localizeText('fullName', params);
			break;
		default:
			break;
		}
		break;

	case 'SalesOrderItems':
		switch (property) {
		case 'Title':
			// instead of: $(L,'productNameItemNumber',{{#Property:ProductDetails/#Property:Name}},{ItemNumber})
			params.push(binding.ProductDetails.Name);
			params.push(binding.ItemNumber);
			value = context.localizeText('productNameItemNumber', params);
			break;
		default:
			break;
		}
		break;

	default:
		break;
	}
	return value;
}