import ChangeSetSwitchReadLink from './../../Common/ChangeSet/ChangeSetSwitchReadLink';

export default function Links(context) {
	var links = [];
	links.push({
		'Property': 'Header',
		'Target': {
			'EntitySet': 'SalesOrderHeaders',
			'ReadLink': ChangeSetSwitchReadLink(context)
		}
	});
	links.push({
		'Property': 'ProductDetails',
		'Target': {
			'EntitySet': 'Products',
			'ReadLink': "Products('1c12e7f2-f08a-45ce-9e49-063061f2c4a7')"
		}
	});
	return links;
}

	// "CreateLinks": [
	// 	{
	// 		"Property": "Header",
	// 		"Target": {
	// 			"EntitySet": "SalesOrderHeaders",
	// 			"ReadLink": "/SalesOrdersOffline/Rules/Common/ChangeSet/ChangeSetSwitchReadLink.js"
	// 		}
	// 	},
	// 	{
	// 		"Property": "ProductDetails",
	// 		"Target": {
	// 			"EntitySet": "Products",
	// 			"ReadLink": "Products('1c12e7f2-f08a-45ce-9e49-063061f2c4a7')"
	// 		}
	// 	}
	// ],