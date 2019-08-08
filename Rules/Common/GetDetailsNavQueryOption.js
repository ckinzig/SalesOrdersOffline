import SODetailsQueryOptions from './../SalesOrder/SODetails/QueryOptions';

export default function GetDetailsNavQueryOption(entityODataType) {
	switch (entityODataType) {
	case '#ESPM.SalesOrderHeaders':
		return SODetailsQueryOptions();
	default:
		return '';
	}
}