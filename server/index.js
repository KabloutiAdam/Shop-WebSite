const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const db = new sqlite3.Database("dbFiles/shop.db");

// Middleware
app.use(cors());
app.use(express.json());

// Activer les clés étrangères
db.run("PRAGMA foreign_keys = ON;");

// Route GET /products
app.get("/products", (req, res) => {
    const searchQuery = req.query.query?.toLowerCase()
    let baseQuery = `
    SELECT 
      p.id, p.name, p.image_link, p.price, p.description,
      i.name AS item_name,
      c.name AS category_name,
      b.name AS brand_name
    FROM t_product p
    JOIN t_items i ON p.item_id = i.id
    JOIN t_brand b ON p.brand_id = b.id
    JOIN t_categories c ON i.category_fk = c.id
  `;

    const params = []

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
});

// Démarrer le serveur
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend en ligne sur http://localhost:${PORT}`);
});
