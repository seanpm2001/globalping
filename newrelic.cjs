/* eslint-disable camelcase */

exports.config = {
	app_name: [ '' ],
	license_key: '',
	logging: {
		level: 'info',
		filepath: 'stdout',
	},
	application_logging: {
		enabled: true,
		forwarding: {
			enabled: true,
		},
	},
	distributed_tracing: {
		enabled: true,
	},
	transaction_events: {
		max_samples_stored: 100,
		attributes: {
			enabled: false,
		},
	},
	allow_all_headers: true,
	attributes: {
		exclude: [
			'request.headers.cookie',
			'request.headers.authorization',
			'request.headers.proxyAuthorization',
			'request.headers.setCookie*',
			'request.headers.x*',
			'response.headers.cookie',
			'response.headers.authorization',
			'response.headers.proxyAuthorization',
			'response.headers.setCookie*',
			'response.headers.x*',
		],
	},
};
