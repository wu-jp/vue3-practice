module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://47.100.186.132/your-path/api',
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '',
                },
            },
        },
    },
}
