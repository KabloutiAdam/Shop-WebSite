const db = require("../db");

exports.getAllBrands = (req, res) => {
    const searchQuery = req.query.paramQuery?.toLowerCase();
    let baseQuery = `
        SELECT 
          b.id, b.name
        FROM t_brand b
    `;

    const params = [];

    if (searchQuery) {
        baseQuery += ` WHERE LOWER(b.name) LIKE ?`;
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