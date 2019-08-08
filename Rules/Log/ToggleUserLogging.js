import CommonLibrary from './../Common/Library/CommonLibrary';

export default function ToggleUserLogging(context) {
	try {
		var logger = context.getLogger();
		var enableLogSwitchControl;
		var logLevelLstPkrControl;
		var dict = CommonLibrary.getControlDictionaryFromPage(context);
		if (dict) {
			if (dict.EnableLogSwitch) {
				enableLogSwitchControl = dict.EnableLogSwitch;
			}
			if (dict.LogLevelLstPkr) {
				logLevelLstPkrControl = dict.LogLevelLstPkr;
			}
		}
		var switchValue = enableLogSwitchControl.getValue();
		if (switchValue) {
			logger.on();
			logLevelLstPkrControl.setVisible(true);
			logLevelLstPkrControl.setEditable(true);
			logLevelLstPkrControl.redraw();
		} else {
			logger.off();
			logLevelLstPkrControl.setEditable(false);
			logLevelLstPkrControl.setVisible(false);
			logLevelLstPkrControl.redraw();
		}
		return switchValue;
	} catch (exception) {
		logger.log(String(exception), 'Error');
		return undefined;
	}
}
