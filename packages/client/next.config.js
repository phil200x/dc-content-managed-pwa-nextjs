const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    env: {
        contentApi: 'philpwa.cdn.content.amplience.net'
    },
    poweredByHeader: false,
    target: 'serverless'
}
