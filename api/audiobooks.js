const fetch = require('node-fetch');

module.exports = async (req, res) => {
    const { q } = req.query;
    if (!q) {
        // عرض قائمة افتراضية لكتب مسموعة شهيرة
        return res.status(200).json({ books: getDefaultBooks() });
    }

    try {
        const url = `https://librivox.org/api/feed/audiobooks?title=${encodeURIComponent(q)}&format=json&limit=20`;
        const response = await fetch(url);
        const data = await response.json();
        const books = (data.books || []).map(book => ({
            id: book.id,
            title: book.title,
            author: book.authors?.[0]?.first_name + ' ' + book.authors?.[0]?.last_name || 'غير معروف',
            audioUrl: book.url_text_source || `https://www.archive.org/download/${book.url_librivox}/${book.url_librivox}.mp3`
        }));
        res.status(200).json({ books: books.length ? books : getDefaultBooks() });
    } catch (e) {
        res.status(200).json({ books: getDefaultBooks() });
    }
};

function getDefaultBooks() {
    return [
        { title: "ألف ليلة وليلة", author: "مجهول", audioUrl: "https://ia800100.us.archive.org/29/items/1001_nights_librivox/1001_nights_01_64kb.mp3" },
        { title: "كليلة ودمنة", author: "ابن المقفع", audioUrl: "https://ia801400.us.archive.org/25/items/kalila_wa_dimna_1408_librivox/kalilawadimna_01_ibnalmuqaffa_64kb.mp3" },
        { title: "الأمير الصغير", author: "أنطوان دو سانت", audioUrl: "https://ia800203.us.archive.org/16/items/le_petit_prince_ar/lepetitprince_01_saintexupery_64kb.mp3" }
    ];
}
