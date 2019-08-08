export default function (pageProxy, count = 1) {
	for (var i = 0; i < count; i++) {
		pageProxy.setActionBarItemVisible(i, false);
	}
}