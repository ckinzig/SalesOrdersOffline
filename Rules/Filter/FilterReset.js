import Logger from './../Log/Logger';
import FilterLibrary from './FilterLibrary';

export default function FilterReset(context) {
	try {
		FilterLibrary.setDefaultFilter(context.getPageProxy());
	} catch (exception) {
		/**Implementing our Logger class*/
		Logger.error('Filter', 'FilterReset error: ' + exception);
	}
}
