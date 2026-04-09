const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: 'Query required' });
    // استخدام واجهة Archive.org للبحث عن مواد صوتية
    const url = `https://archive.org/advancedsearch.php?q=${encodeURIComponent(q)}+AND+mediatype:(audio)&fl[]=identifier,title,creator,year&sort[]=downloads+desc&rows=20&page=1&output=json`;
    const response = await fetch(url);
    const data = await response.json();
    const docs = data.response.docs || [];
    const books = docs.map(doc => ({
        id: doc.identifier,
        title: doc.title,
        author: doc.creator,
        audioUrl: `https://archive.org/download/${doc.identifier}/${doc.identifier}.mp3`
    }));
    res.status(200).json({ books });
};
