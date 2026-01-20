const httpProxy = require('http-proxy-middleware');
const createProxyMiddleware = httpProxy.createProxyMiddleware || httpProxy;
const bodyParser = require('body-parser');

module.exports = function(app) {
    // parse JSON and urlencoded bodies so req.body is available to onProxyReq
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));

    app.use('/api/shorten', createProxyMiddleware({
        target: 'https://cleanuri.com',
        changeOrigin: true,
        secure: true,
        pathRewrite: { '^/api/shorten': '/api/v1/shorten' },
        onProxyReq(proxyReq, req) {
            if (!req.body || Object.keys(req.body).length === 0) return;
            const bodyData = new URLSearchParams(req.body).toString();
            proxyReq.setHeader('Content-Type', 'application/x-www-form-urlencoded');
            proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
            proxyReq.write(bodyData);
        }
    }));
};