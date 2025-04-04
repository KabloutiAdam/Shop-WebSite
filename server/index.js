const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db"); 

const app = express();

// Middleware global
app.use(cors());
app.use(express.json());

// API routes
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");

app.use("/api/products", productRoutes); 
app.use("/api/auth", authRoutes);


const distPath = path.join(__dirname, "../dist");
app.use(express.static(distPath));


app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

// Lancer le serveur
const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
  console.log(`Serveur Express prêt sur http://localhost:${PORT}`);
});
