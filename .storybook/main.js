module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        'storybook-dark-mode',
        '@storybook/addon-interactions',
        '@storybook/preset-scss',
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss')
                }
            }
        }
    ],
    framework: '@storybook/react',
    core: {
        builder: '@storybook/builder-webpack5'
    }
}
