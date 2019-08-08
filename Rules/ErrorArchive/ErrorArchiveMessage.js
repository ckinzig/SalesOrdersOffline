import ErrorArchive from './ErrorArchive';

export default function ErrorArchiveMessage(context) {
	return ErrorArchive.getErrorMessage(context.binding);
}