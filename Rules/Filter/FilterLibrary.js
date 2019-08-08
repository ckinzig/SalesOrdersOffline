export default class {
	static setFilterValue(control, value) {
		if (control) {
			control.setValue(value);
		}
	}

	static getFilterControls(context) {
		var formCellContainer = context.getControl('FormCellContainer');
		if (formCellContainer && formCellContainer.getControls()) {
			return formCellContainer.getControls();
		}
		return '';
	}

	static setDefaultFilter(context) {
		if (this.getFilterControls(context)) {
			var controls = this.getFilterControls(context);
			this.setDefaultControl(controls);
		}
	}

	static setDefaultControl(controls) {
		if (controls && controls.length > 0) {
			for (var i = 0; i < controls.length; i++) {
				if (i === 0) {
					this.setFilterValue(controls[i], controls[i].getCollection()[0].ReturnValue);
				} else {
					this.setFilterValue(controls[i], '');
				}
			}
		}
	}
}