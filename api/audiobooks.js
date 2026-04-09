const fetch = require('node-fetch');
const DEFAULT_BOOKS = [
    { title: "ألف ليلة وليلة", author: "مجهول", audioUrl: "https://ia800100.us.archive.org/29/items/1001_nights_librivox/1001_nights_01_64kb.mp3" },
    { title: "كليلة ودمنة", author: "ابن المقفع", audioUrl: "https://ia801400.us.archive.org/25/items/kalila_wa_dimna_1408_librivox/kalilawadimna_01_ibnalmuqaffa_64kb.mp3" },
    { title: "الأمير الصغير", author: "أنطوان دو سانت", audioUrl: "https://ia800203.us.archive.org/16/items/le_petit_prince_ar/lepetitprince_01_saintexupery_64kb.mp3" }
];

module.exports = async (req, res) => {
    const { q } = req.query;
    if (!q) return res.status(200).json({ books: DEFAULT_BOOKS });
    try {
        const url = `https://librivox.org/api/feed/audiobooks?title=${encodeURIComponent(q)}&format=json&limit=15`;
        const data = await fetch(url).then(r => r.json());
        const books = (data.books || []).map(b => ({
            title: b.title,
            author: b.authors?.[0]?.first_name + ' ' + b.authors?.[0]?.last_name || 'غير معروف',
            audioUrl: b.url_text_source || `https://archive.org/download/${b.url_librivox}/${b.url_librivox}.mp3`
        }));
        res.status(200).json({ books: books.length ? books : DEFAULT_BOOKS });
    } catch(e) {
        res.status(200).json({ books: DEFAULT_BOOKS });
    }
};
