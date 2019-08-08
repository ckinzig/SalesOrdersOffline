import SetCaption from './SetCaption';
import CommonLibrary from './../../Common/Library/CommonLibrary';
import Logger from './../../Log/Logger';

export default function OnRefresh(context) {
	context.showActivityIndicator(context.localizeText('refreshing'));
	return SetCaption(context).then(function () {
		// sollte hier ein Promise zurückgegeben werden???
		context.dismissActivityIndicator();
		CommonLibrary.refreshPage(context);
	}).catch(function (error) {
		Logger.error('OnRefresh', error);
		context.dismissActivityIndicator();
	});
}