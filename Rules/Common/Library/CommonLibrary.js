import Logger from './../../Log/Logger';
import FetchRequest from './../Query/FetchRequest';

export default class {
	static financial(float, digits = 2) {
		return Number.parseFloat(float).toFixed(digits);
	}

	/**
	 * Return the error string from an action result
	 * @param {String} key Key used in the action result metadata
	 */
	static getActionResultError(context, key) {
		var targetPath = '#ActionResults:' + key + '/#Property:error';
		var errorString = context.evaluateTargetPath(targetPath);
		// //Remove error code and 'Error Description' from the message string
		// var error = errorString.message.replace(/\[(.*)\]\s*/g, '').replace(/Error description:\s*/g, '');
		return errorString.message;
	}

	static refreshPage(context) {
		if (context) {
			if (context.getControls()) {
				var controls = context.getControls();
				for (var i = 0; i < controls.length; i++) {
					controls[i].redraw();
				}
			}
		}
	}

	/**
	 * Set a state variable on the given page
	 */
	static setStateVariable(clientAPI, key, value, pageName = 'SOHeaderList') {
		try {
			var page = clientAPI.evaluateTargetPath('#Page:' + pageName);
			var pageData = page.context.clientData;
			pageData[key] = value;
		} catch (err) {
			Logger.error('COMMON', 'Reference to page not found: ' + pageName);
		}
	}

	/**
	 * Clear a state variable on the given page
	 */
	static clearStateVariable(clientAPI, key, pageName = 'SOHeaderList') {
		try {
			var page = clientAPI.evaluateTargetPath('#Page:' + pageName);
			var pageData = page.context.clientData;
			delete pageData[key];
		} catch (err) {
			Logger.error('COMMON', 'Reference to page not found: ' + pageName);
		}
	}

	/**
	 * Get a state variable on the given page
	 */
	static getStateVariable(clientAPI, key, pageName = 'SOHeaderList') {
		try {
			var page = clientAPI.evaluateTargetPath('#Page:' + pageName);
			var pageData = page.context.clientData;
			if (pageData.hasOwnProperty(key)) {
				return pageData[key];
			} else {
				Logger.error('COMMON', 'Property not found in clientData: ' + key);
				return undefined;
			}
		} catch (err) {
			Logger.error('COMMON', 'Reference to page not found: ' + pageName);
			return undefined;
		}
	}

	/**
	 * Get Page Name from context
	 */
	static getPageName(context) {
		if (context.getPageProxy) {
			return context.getPageProxy()._page._definition.getName();
		} else {
			return context._page._definition.getName();
		}
	}

	/**
	 * Displays a warning message prompt with OK and Cancel buttons
	 * Returns promise fulfilled with True (OK button) or rejected with False (Cancel button) to caller
	 * Use undefined when calling this as a parameter placeholder for values you want to skip: "context","caption",undefined,undefined,"cancel"
	 */
	static showWarningDialog(clientAPI, messageText, captionText = clientAPI.localizeText('validationWarning'), okButtonText = clientAPI.localizeText(
		'ok'), cancelButtonText = clientAPI.localizeText('cancel')) {
		clientAPI.dismissActivityIndicator();
		return clientAPI.nativescript.uiDialogsModule.confirm({
			title: captionText,
			message: messageText,
			okButtonText: okButtonText,
			cancelButtonText: cancelButtonText
		}).then(function (result) {
			//Handle resolving the OK button or rejecting the Cancel button
			return new Promise(function (fulfill, reject) {
				if (result === false) {
					reject(false);
				} else {
					fulfill(true);
				}
			});
		});
	}

	/**
	 * Gets a count of rows
	 */
	static getEntitySetCount(clientAPI, entitySet, queryOptions) {
		return clientAPI.count('/SalesOrdersOffline/Services/SampleSrv.service', entitySet, queryOptions).then(function (result) {
			return result;
		}).catch(function (err) {
			Logger.error('COMMON', err);
			return 0;
		});
	}

	/**
	 * Return a dictionary of all page controls keyed by control name
	 */
	static getControlDictionaryFromPage(clientAPI) {
		var dict = {};
		var pageControls;
		if (clientAPI.getPageProxy) {
			pageControls = clientAPI.getPageProxy().getControls();
		} else {
			pageControls = clientAPI.getControls();
		}
		if (pageControls.length > 0) this.buildControlDictionaryForSubControls(pageControls, dict);
		return dict;
	}

	/**
	 * Recursively loop over page controls digging deeper if a "_controls" property exists.
	 * Save all controls in the "dict" dictionary that was passed here by reference
	 */
	static buildControlDictionaryForSubControls(subcontrols, dict) {
		var childControls;
		for (var control of subcontrols) {
			dict[control.getName()] = control;
			if (control.isContainer()) {
				childControls = control.getControls();
				if (childControls.length > 0) this.buildControlDictionaryForSubControls(childControls, dict);
			}
		}
	}

	/**
	 * Turns on inline validation error for the passed in screen scontrol
	 * @param {*} control
	 * @param {*} message
	 * @param {*} msgColor
	 * @param {*} bgColor
	 * @param {*} separatorColor
	 */
	static executeInlineControlError(context, control, message, msgColor = 'ff0000', bgColor = '00ff00', separatorColor = '0000ff') {
		this.setInlineControlError(context, control, message, msgColor, bgColor, separatorColor);
		control.applyValidation();
	}

	/**
	 * this method similar to executeInlineControlError, but it only sets the inline, without applying it.
	 * @param {*} control
	 * @param {*} message
	 * @param {*} msgColor
	 * @param {*} bgColor
	 * @param {*} separatorColor
	 */
	static setInlineControlError(context, control, message, msgColor = 'ff0000', bgColor = '00ff00', separatorColor = '0000ff') {
		control.setValidationProperty('ValidationMessage', message);
		control.setValidationProperty('SeparatorIsHidden', false);
		control.setValidationProperty('ValidationViewIsHidden', false);
		// control.setValidationProperty('ValidationViewBackgroundColor', bgColor);
		// control.setValidationProperty('ValidationMessageColor', msgColor);
		// control.setValidationProperty('SeparatorBackgroundColor', separatorColor);
	}

	/**
	 * this method only changing the visibility state of the control, does not include applyValidation()/redraw()
	 * @param {IControlProxy} control
	 * @param {boolean} isVisible
	 */
	static setInlineControlErrorVisibility(control, isVisible) {
		control.setValidationProperty('ValidationViewIsHidden', !isVisible);
	}

	static clearValidationForPage(pageProxy) {
		var allControls = pageProxy.getControl('FormCellContainer').getControls();
		for (var item of allControls) {
			item.clearValidation();
		}
	}

	/**
	 * Return the value stored in a single-selection list picker array
	 */
	static getListPickerValue(array) {
		if (Array.isArray(array) && array.length === 1 && array[0] && array[0].ReturnValue) {
			return array[0].ReturnValue;
		}
		return '';
	}

	/**
	 * Gets a control proxy reference from the page's form cell container matching the passed in name
	 */
	static getControlProxy(pageProxy, name, containerName = 'FormCellContainer') {
		var container = pageProxy.getControl(containerName);
		if (container) {
			// handle the case of the MDK not allowing extensions to provide their own ClientAPI
			if (!container.hasOwnProperty('getControl') && container.hasOwnProperty('_control') &&
				typeof container._control.getCellProxyWithName === 'function') {
				return container._control.getCellProxyWithName(name);
			}
			return container.getControl(name);
		} else {
			return null;
		}
	}

	/**
	 * Set the TransactionType flag to "CREATE" or "UPDATE", else will be reset to empty string ""
	 * @param {*} clientAPI
	 * @param {string} FlagValue
	 */
	static setOnCreateUpdateFlag(clientAPI, FlagValue) {
		//If the value is not either "CREATE" or "UPDATE", fore it to empty ""
		if (FlagValue === "CREATE" || FlagValue === "UPDATE") {
			this.setStateVariable(clientAPI, 'TransactionType', FlagValue);
		} else {
			this.setStateVariable(clientAPI, 'TransactionType', '');
		}
	}

	/**
	 * Check if we are on Create mode
	 * @param {IClientAPI} clientAPI
	 * @param {boolean}
	 */
	static IsOnCreate(clientAPI) {
		var transType = this.getStateVariable(clientAPI, 'TransactionType');
		return transType === 'CREATE';
	}

	/**
	 * Set the ChangeSet flag
	 * @param {IPageProxy} clientAPI
	 * @param {boolean} FlagValue
	 */
	static setOnChangesetFlag(clientAPI, FlagValue) {
		this.setStateVariable(clientAPI, 'ONCHANGESET', FlagValue);
	}

	/**
	 * check if we are in the middle of changeset action
	 * @param {IPageProxy} clientAPI
	 */
	static isOnChangeset(clientAPI) {
		var flag = this.getStateVariable(clientAPI, 'ONCHANGESET');
		return flag;
	}

	static rebindPageObject(pageProxy, queryOptions) {
		var readLink = pageProxy.binding['@odata.readLink'];
		return new FetchRequest(readLink, queryOptions).get(pageProxy, readLink, true).then(function (result) {
			pageProxy._context.binding = result.getItem(0);
			return true;
		});
	}

	static sectionPageRefresh(pageProxy, queryOptions) {
		return this.rebindPageObject(pageProxy, queryOptions).then(function () {
			var sectionedTable = pageProxy.getControl('SectionedTable');
			sectionedTable._context.binding = pageProxy._context.binding;
			sectionedTable.redraw();
		});
	}

	/**
	 * enable or disable a tool bar
	 * @param {IPageProxy} context - Page Context to use
	 * @param {String} pageName - Page name to use
	 * @param {String} toolBarName - Toolbar name to be enabled
	 * @param {String} flag - Boolen flag to enable or disable
	 */
	static enableToolBar(context, pageName, toolBarName, flag) {
		var pageToolbar = void 0;
		if (pageName) {
			var page = context.evaluateTargetPath('#Page:' + pageName);
			pageToolbar = page.getToolbar();
		} else if (context._page) {
			pageToolbar = context._page.getToolbar();
		}
		if (pageToolbar) {
			pageToolbar.then(function (toolbar) {
				var toolbarItems = toolbar.getToolbarItems();
				for (var i = 0; i < toolbarItems.length; i++) {
					if (toolbarItems[i].name === toolBarName) {
						toolbarItems[i].setEnabled(flag);
					}
				}
			});
		}
	}

	/**
	 * @param {String} readLink OData ReadLink to parse
	 * @param {String?} value Value to pull from the ReadLink, if there is more than one parameter present
	 * @returns {String} value of the key specified by 'value' from the provided ReadLink
	 */
	static parseReadLink(readLink, value) {
		var components = readLink.match(/([A-z]+=)?'[0-9]+'/g);
		var obj = {};
		if (components) {
			if (components.length > 1) {
				for (var idx in components) {
					var tmp = components[idx].split('=');
					obj[tmp[0]] = tmp[1].replace(/'/g, '');
				}
				return obj[value];
			} else {
				return components[0].replace(/'/g, '');
			}
		} else {
			return '';
		}
	}

	static getEntitySetFromReadLink(readLink) {
		return readLink.split('(')[0];
	}
}