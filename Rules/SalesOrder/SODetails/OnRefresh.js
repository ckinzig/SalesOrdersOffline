import HideActionItems from './HideActionItems';
import ItemsLoadPictures from './ItemsLoadPictures';
import CommonLibrary from './../../Common/Library/CommonLibrary';
import Logger from './../../Log/Logger';

export default function OnRefresh(context) {
	context.showActivityIndicator();
	HideActionItems(context);
	return ItemsLoadPictures(context).then(function () {
		// sollte hier ein Promise zurückgegeben werden???
		context.dismissActivityIndicator();
		CommonLibrary.refreshPage(context);
	}).catch(function (error) {
		Logger.error('OnRefresh', error);
		context.dismissActivityIndicator();
	});
}