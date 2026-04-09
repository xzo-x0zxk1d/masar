const fs = require('fs');
const path = require('path');

const dataFile = path.join(process.cwd(), 'visitors.json');

module.exports = async (req, res) => {
    let visitors = {};
    try {
        if (fs.existsSync(dataFile)) {
            visitors = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
        }
    } catch (e) {}

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    const key = ip.split(',')[0].trim();
    let count = Object.keys(visitors).length;

    if (!visitors[key]) {
        visitors[key] = new Date().toISOString();
        count++;
        fs.writeFileSync(dataFile, JSON.stringify(visitors));
    }

    res.status(200).json({ count });
};
