export default function Test(context) {
	var section = context.getName();
	var property = context.getProperty();
	var binding = context.binding
	var value = '';
	var params = [];

	switch (section) {
	case 'SOHeaders':
		switch (property) {
		case 'Footnote':
			// instead of: $(L,'cityCountry',{{#Property:CustomerDetails/#Property:City}},{{#Property:CustomerDetails/#Property:Country}})
			params.push(binding.CustomerDetails.City);
			params.push(binding.CustomerDetails.Country);
			value = context.localizeText('cityCountry', params);
			break;
		case 'Title':
			// instead of: $(L,'fullName',{{#Property:CustomerDetails/#Property:LastName}},{{#Property:CustomerDetails/#Property:FirstName}})
			params.push(binding.CustomerDetails.LastName);
			params.push(binding.CustomerDetails.FirstName);
			value = context.localizeText('fullName', params);
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