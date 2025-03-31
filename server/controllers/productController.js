const db = require("../db");

exports.getAllProducts = (req, res) => {
    const searchQuery = req.query.query?.toLowerCase();
    let baseQuery = `
        SELECT 
          p.id, p.name, p.image_link, p.price, p.description,
          i.name AS item_name,
          i.traduction AS item_traduction,
          c.name AS category_name,
          c.traduction AS category_traduction,
          b.name AS brand_name
        FROM t_product p
        JOIN t_items i ON p.item_id = i.id
        JOIN t_brand b ON p.brand_id = b.id
        JOIN t_categories c ON i.category_fk = c.id
    `;

    const params = [];

    if (searchQuery) {
        baseQuery += ` WHERE LOWER(p.name) LIKE ?`;
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