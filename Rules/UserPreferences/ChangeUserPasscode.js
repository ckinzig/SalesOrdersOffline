export default function ChangeUserPasscode(controlProxy) {
	if (controlProxy.getPasscodeSource() === 2) {
		return controlProxy.executeAction('/SalesOrdersOffline/Actions/Passcode/DisplayPasscodeSource.action');
	} else {
		return controlProxy.executeAction('/SalesOrdersOffline/Actions/Passcode/ChangeUserPasscode.action');
	}
}
