const db = require("../db");

exports.getAllWarehouses = (req, res) => {
    let baseQuery = `
        SELECT 
          w.idWarehouse, w.name
        FROM t_warehouse w
    `;

    db.all(baseQuery, (err, rows) => {
        if (err) {
            console.error("Erreur SQL :", err);
            return res.status(500).json({ error: "Erreur serveur" });
        }
        res.json(rows);
    });
};


