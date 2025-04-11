const db = require("../db");

exports.getAllBrands = (req, res) => {
    const searchQuery = req.query.query?.toLowerCase();
    let baseQuery = `
        SELECT 
          b.id, b.name
        FROM t_brand b
    `;

    const params = [];

    if (searchQuery) {
        baseQuery += ` WHERE b.name LIKE ? COLLATE NOCASE`;
        params.push(`%${searchQuery}%`);
    }

    db.all(baseQuery, params, (err, rows) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).json({ error: "Erreur serveur" });
        }
        res.json(rows);
    });
};


