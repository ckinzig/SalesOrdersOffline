export default function LogLevels(context) {
	var levels = [];
	levels.push({
		'DisplayValue': context.localizeText('error'),
		'ReturnValue': 'Error'
	});
	levels.push({
		'DisplayValue': context.localizeText('debug'),
		'ReturnValue': 'Debug'
	});
	levels.push({
		'DisplayValue': context.localizeText('warn'),
		'ReturnValue': 'Warn'
	});
	levels.push({
		'DisplayValue': context.localizeText('info'),
		'ReturnValue': 'Info'
	});
	return levels;
}
