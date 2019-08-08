import SODetailsQueryOptions from './../SODetails/QueryOptions';

export default function QueryOptions() {
	return SODetailsQueryOptions() + '&$orderby=CustomerDetails/LastName';
}