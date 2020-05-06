var webpack = require('webpack')

module.exports = {

    indexPath: 'index.html',

    assetsDir: '',
    outputDir: 'dist',

    publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
    filenameHashing: true,

    lintOnSave: false,

    runtimeCompiler: false,
    productionSourceMap: false,
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    },


    
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                mapboxgl: 'mapbox-gl'
            })
        ]
    }


}