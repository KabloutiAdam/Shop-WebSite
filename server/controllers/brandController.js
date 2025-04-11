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

exports.updateProduct = (req, res) => {

    const productId = req.params.id;
    const { name, price, brand_name } = req.body;

    if (!name || !price || !brand_name) {
        return res.status(400).json({ error: "Champs manquants" });
    }


    
    const getBrandIdQuery = `SELECT id FROM t_brand WHERE name = ?`;

    db.get(getBrandIdQuery, [brand_name], (err, brandRow) => {
        if (err || !brandRow) {
            return res.status(400).json({ error: "Marque introuvable" });
        }

        const brand_id = brandRow.id;

        const updateQuery = `
          UPDATE t_product
          SET name = ?, price = ?, brand_id = ?
          WHERE id = ?
      `;

        db.run(updateQuery, [name, price, brand_id, productId], function (err) {
            if (err) {
                console.error("Erreur lors de la mise à jour :", err);
                return res.status(500).json({ error: "Erreur serveur" });
            }

            return res.json({ success: true, updatedId: productId });
        });
    });

}
