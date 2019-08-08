{
	"Localization": "/SalesOrdersOffline/i18n/i18n.properties",
	"MainPage": "/SalesOrdersOffline/Pages/SalesOrder/SOHeaderList.page",
	"OnDidUpdate": "/SalesOrdersOffline/Rules/ApplicationEvents/OnDidUpdate.js",
	"OnLaunch": [
		"/SalesOrdersOffline/Actions/Service/InitializeOfflineOData.action",
		"/SalesOrdersOffline/Rules/Log/InitializeLogger.js",
		"/SalesOrdersOffline/Rules/Sync/InitializeSyncState.js"
	],
	"OnWillUpdate": "/SalesOrdersOffline/Rules/ApplicationEvents/OnWillUpdate.js",
	"SDKStyles": "/SalesOrdersOffline/Styles/SDKStyles.nss",
	"Styles": "/SalesOrdersOffline/Styles/Styles.css",
	"Version": "/SalesOrdersOffline/Globals/AppDefinition_Version.global",
	"_Name": "SalesOrdersOffline"
}