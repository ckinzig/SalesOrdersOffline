export default function ErrorArchiveDetailsRequestBody(context) {
	var errorObject = context.getPageProxy().binding.ErrorObject;

	var result = [];
	if (errorObject && errorObject.RequestBody) {
		var requestBody = JSON.parse(errorObject.RequestBody);
		var requestBodyKeys = Object.keys(requestBody);
		for (var key in requestBodyKeys) {
			result.push(requestBodyKeys[key] + ' : ' + requestBody[requestBodyKeys[key]]);
		}
	}
	return result.join('\n');
}