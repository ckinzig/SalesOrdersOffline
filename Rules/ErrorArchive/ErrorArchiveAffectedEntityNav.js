import Logger from './../Log/Logger';

export default function ErrorArchiveAffectedEntityNav(context) {
	var errorObject = context.binding.ErrorObject;
	context.getClientData().FromErrorArchive = true;

	if (errorObject.RequestURL.includes('SalesOrderHeaders')) {
		//return WorderOrderUpdateNav(context);
	} else {
		Logger.error('ERROR ARCHIVE', 'ErrorArchiveAffectedEntityNav: Unknown entity');
	}
}