const express = require("express");
const cors = require("cors");
const path = require("path");


const app = express();
const isProduction = process.env.NODE_ENV === "production";


app.use(express.static(path.join(__dirname, "../dist")));

app.use(cors());
app.use(express.json());

// API routes
const productRoutes = require("./routes/products");
const authRoutes = require("./routes/auth");
const brandRoute = require("./routes/brand");
const warehouseRoute = require("./routes/warehouse");


app.use("/api/products", productRoutes); 
app.use("/api/auth", authRoutes);
app.use("/api/brand", brandRoute);
app.use("/api/warehouse", warehouseRoute);


if (isProduction) {
  const distPath = path.join(__dirname, "../dist");
  app.use(express.static(distPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });
}





// Lancer le serveur
const PORT = process.env.PORT || 3040;
app.listen(PORT, () => {
  console.log(`Serveur Express prêt sur http://localhost:${PORT}`);
});
