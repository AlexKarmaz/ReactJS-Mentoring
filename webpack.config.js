module.exports = process.env.NODE_ENV === 'development'
    ? require('./webpack/webpack.config.dev')
    : require('./webpack/webpack.config.prod');