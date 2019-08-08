import CommonLibrary from './../../Common/Library/CommonLibrary';
import OnRefresh from './OnRefresh';

export default function OnCreate(context) {
	CommonLibrary.setOnChangesetFlag(context, true);
	CommonLibrary.setOnCreateUpdateFlag(context, 'CREATE');
	return context.executeAction('/SalesOrdersOffline/Actions/SalesOrder/CreateUpdateDelete/SOCreateChangeSet.action').then(function () {
		return OnRefresh(context);
	});
}