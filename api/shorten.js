const fetch = require('node-fetch');

module.exports = async(req, res) => {
    if (req.method !== 'POST') return res.status(405).end();
    try {
        const params = new URLSearchParams();
        params.append('url', req.body.url);
        const r = await fetch('https://cleanuri.com/api/v1/shorten', { method: 'POST', body: params });
        const data = await r.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};