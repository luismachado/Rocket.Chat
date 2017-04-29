Meteor.startup(function() {
	const enableQuery = {
		_id: 'Katex_Enabled',
		value: true
	};
	RocketChat.settings.add('Katex_Enabled', true, {
		type: 'boolean',
		group: 'Message',
		section: 'Katex',
		'public': true,
		i18n: 'Katex_Enabled_Description'
	});
	RocketChat.settings.add('Katex_Parenthesis_Syntax', true, {
		type: 'boolean',
		group: 'Message',
		section: 'Katex',
		'public': true,
		enableQuery,
		i18nDescription: 'Katex_Parenthesis_Syntax_Description'
	});
	return RocketChat.settings.add('Katex_Dollar_Syntax', false, {
		type: 'boolean',
		group: 'Message',
		section: 'Katex',
		'public': true,
		enableQuery,
		i18nDescription: 'Katex_Dollar_Syntax_Description'
	});
});

// ---
// generated by coffee-script 1.9.2
