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


exports.getProductStock = (req, res) => {
    const id = req.query.id;
    
    let query = `
        SELECT w.name, s.quantity
        FROM t_warehouseStock s
        JOIN t_warehouse w ON s.warehouseId = w.idWarehouse
        WHERE s.productId = ?;
    `
    db.all(query, [id], (err, rows) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).json({ error: "Erreur serveur" });
        }
        res.json(rows);
    });


}
