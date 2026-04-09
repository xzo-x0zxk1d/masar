const fetch = require('node-fetch');
module.exports = async (req, res) => {
    const { q, startIndex = 0, maxResults = 20 } = req.query;
    if (!q) return res.status(400).json({ error: 'Query required' });
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&startIndex=${startIndex}&maxResults=${maxResults}`;
    const data = await fetch(url).then(r => r.json());
    res.status(200).json(data);
};
