import ErrorArchive from './ErrorArchive';

export default function ErrorArchiveDetailsMessage(context) {
	return ErrorArchive.getErrorMessage(context.getPageProxy().binding.ErrorObject);
}