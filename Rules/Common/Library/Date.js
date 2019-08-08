export default class {
	static getCurrentDate(context) {
		var date = new Date();
		return this.toLocalDateString(date);
	}

	static toLocalDateString(date) {
		var year = date.getFullYear();
		var month = date.getMonth() + 1;
		if (month < 10) month = '0' + month;
		var day = date.getDate();
		if (day < 10) day = '0' + day;
		var hour = date.getHours();
		if (hour < 10) hour = '0' + hour;
		var minute = date.getMinutes();
		if (minute < 10) minute = '0' + minute;
		var second = date.getSeconds();
		if (second < 10) second = '0' + second;
		return year + '-' + month + '-' + day + 'T' + hour + ':' + minute + ':' + second;
	}
}