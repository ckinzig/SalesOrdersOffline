export default class {
	static evalIsEmpty(val) {
		return val === undefined || val == null || val.length <= 0 || val === 'undefined';
	}
}