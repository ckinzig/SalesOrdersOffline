import CommonLibrary from './../../Common/Library/CommonLibrary';
import HideActionItems from './HideActionItems';

export default function OnReject(context) {
	context.executeAction('/SalesOrdersOffline/Actions/SalesOrder/CreateUpdateDelete/SOReject.action').then(function () {
		return CommonLibrary.sectionPageRefresh(context.getPageProxy(), '$expand=CustomerDetails').then(function () {
			context.getPageProxy()._page._redrawToolbar();
			// this works also:
			// CommonLibrary.enableToolBar(context.getPageProxy(), null, 'SalesOrderAcceptTbI', true);
			// CommonLibrary.enableToolBar(context.getPageProxy(), null, 'SalesOrderRejectTbI', false);
			HideActionItems(context.getPageProxy());
		});
	});
}