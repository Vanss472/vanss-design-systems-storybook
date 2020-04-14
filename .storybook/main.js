const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
		'@storybook/addon-actions',
		'@storybook/addon-knobs/register',
		'@storybook/addon-a11y/register'
	],
  webpackFinal: async config => {
    // do mutation to the config
		config.resolve.modules = [
			...(config.resolve.modules || []),
			path.resolve(__dirname, "../src")
		];

    return config;
  },
};
