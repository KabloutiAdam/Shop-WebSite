BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "t_brand" (
	"id"	INTEGER,
	"name"	TEXT NOT NULL UNIQUE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "t_categories" (
	"id"	INTEGER,
	"name"	TEXT NOT NULL UNIQUE,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "t_items" (
	"id"	INTEGER,
	"name"	TEXT NOT NULL UNIQUE,
	"category_fk"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("category_fk") REFERENCES "t_categories"("id")
);
CREATE TABLE IF NOT EXISTS "t_product" (
	"id"	INTEGER,
	"name"	TEXT NOT NULL,
	"image_link"	TEXT,
	"price"	REAL NOT NULL,
	"description"	TEXT,
	"item_id"	INTEGER,
	"brand_id"	INTEGER,
	PRIMARY KEY("id" AUTOINCREMENT),
	FOREIGN KEY("brand_id") REFERENCES "t_brand"("id"),
	FOREIGN KEY("item_id") REFERENCES "t_items"("id")
);
COMMIT;
