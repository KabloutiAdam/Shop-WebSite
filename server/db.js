const sqlite3 = require("sqlite3").verbose();



const app = express();
const db = new sqlite3.Database("dbFiles/shop.db");


db.run("PRAGMA foreign_keys = ON;");

module.exports = db;
