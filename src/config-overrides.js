// @SOURCE: https://stackoverflow.com/a/55298684/6495185
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
	// https://github.com/necolas/react-native-web/blob/master/docs/guides/getting-started.md
	config.resolve.alias = { 'react-native$': 'react-native-web' };

	config.resolve.plugins = config.resolve.plugins.filter(plugin => !(plugin instanceof ModuleScopePlugin));

	return config;
};