import CommonLibrary from './../../Common/Library/CommonLibrary';
import HideActionItems from './HideActionItems';

export default function OnAccept(context) {
	context.executeAction('/SalesOrdersOffline/Actions/SalesOrder/CreateUpdateDelete/SOAccept.action').then(function () {
		return CommonLibrary.sectionPageRefresh(context.getPageProxy(), '$expand=CustomerDetails').then(function () {
			context.getPageProxy()._page._redrawToolbar();
			// this works also:
			// CommonLibrary.enableToolBar(context.getPageProxy(), null, 'SalesOrderAcceptTbI', false);
			// CommonLibrary.enableToolBar(context.getPageProxy(), null, 'SalesOrderRejectTbI', true);
			HideActionItems(context.getPageProxy());
		});
	});
}