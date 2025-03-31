const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const db = require("./db")


// Middleware
app.use(cors());
app.use(express.json());


// Routes 
const productRoutes = require('./routes/products')



// Appel
app.use("/products", productRoutes)




// Démarrer le serveur
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend en ligne sur http://localhost:${PORT}`);
});
