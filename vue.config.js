var pxtorem = require('postcss-pxtorem');
module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [new pxtorem({
                    rootValue: 100,
                    unitPrecision: 5,
                    propList: ['font', 'letter - spacing'],
                    selectorBlackList: [],
                    replace: true,
                    mediaQuery: false,
                    minPixelValue: 5,
                    exclude: /node_modules/i
                })]
            }
        }
    },
    devServer: {
        proxy: {
            '/server': {
                target: 'https://m.228.cn/',
                changeOrigin: true,
            }
        }
    }
}