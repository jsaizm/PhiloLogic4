module.exports = {
    devServer: {
        compress: true,
        disableHostCheck: true,
        host: "0.0.0.0",
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    chainWebpack: config => {
        config.externals({
            Vue: 'vue'
        })
    },
    runtimeCompiler: true,
    publicPath: process.env.NODE_ENV === 'production' ? getBaseUrl() : '/'
}

function getBaseUrl() {
    const globalConfig = require('./appConfig.json')
    return globalConfig.dbUrl
}