require('ignore-styles');
require('@babel/polyfill');
require('@babel/register')({
    ignore: [/(node_module)/],
    presets: [
        '@babel/preset-env',
        ['@babel/preset-react', {"runtime": "automatic"}]
    ],
    plugins : [
        '@babel/plugin-proposal-class-properties'
    ]
})

require('./server')