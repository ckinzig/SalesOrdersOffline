export default class {
	static init(clientAPI) {
		if (this._instance == null) {
			this._instance = clientAPI.getLogger();
		}
	}

	/**
	 * Log an error message. Adds domain to the message
	 * @param {*} context
	 * @param {String} domain (Job, Notif, Equipment, Floc, Geo, Analytics etc)
	 * @param {String} message Message to log
	 */
	static error(domain, message) {
		var msg = '[' + domain + '] ' + message;
		this._instance.log(msg, 'Error');
		// eslint-disable-next-line no-console
		console.log(Date() + ' ' + msg);
	}

	/**
	 * Log a warning message. Adds domain to the message
	 * @param {*} context
	 * @param {String} domain (Job, Notif, Equipment, Floc, Geo, Analytics etc)
	 * @param {String} message Message to log
	 */
	static warn(domain, message) {
		var msg = '[' + domain + '] ' + message;
		this._instance.log(msg, 'Warn');
		// eslint-disable-next-line no-console
		console.log(Date() + ' ' + msg);
	}

	/**
	 * Log an info message. Adds domain to the message
	 * @param {*} context
	 * @param {String} domain (Job, Notif, Equipment, Floc, Geo, Analytics etc)
	 * @param {String} message Message to log
	 */
	static info(domain, message) {
		var msg = '[' + domain + '] ' + message;
		this._instance.log(msg, 'Info');
		// eslint-disable-next-line no-console
		console.log(Date() + ' ' + msg);
	}

	/**
	 * Log a debug message. Adds domain to the message
	 * @param {*} context
	 * @param {String} domain (Job, Notif, Equipment, Floc, Geo, Analytics etc)
	 * @param {String} message Message to log
	 */
	static debug(domain, message) {
		var msg = '[' + domain + '] ' + message;
		this._instance.log(msg, 'Debug');
		// eslint-disable-next-line no-console
		console.log(Date() + ' ' + msg);
	}
}