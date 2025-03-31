const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
const db = require("./db")
const app = express();

// Middleware
app.use(cors());
app.use(express.json());


// Routes 
const productRoutes = require('./routes/products')
const authRoutes = require("./routes/auth");



// Appel
app.use("/products", productRoutes)
app.use("/auth", authRoutes);




// Démarrer le serveur
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Backend en ligne sur http://localhost:${PORT}`);
});
