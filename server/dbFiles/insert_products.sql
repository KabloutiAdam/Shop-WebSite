INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Tabouret 4 pieds',
  'tabouret4pieds.jfif',
  45.8,
  'Tabouret simple et pratique.',
  (SELECT id FROM t_items WHERE name = 'chair'),
  (SELECT id FROM t_brand WHERE name = 'FurniCo')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Tabouret 3 pieds',
  'tabouret3pieds.jfif',
  39.58,
  'Confort et légèreté.',
  (SELECT id FROM t_items WHERE name = 'chair'),
  (SELECT id FROM t_brand WHERE name = 'ComfortPlus')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Tabouret sans pied',
  'tabouret0pied.jpg',
  12.45,
  'Le tabouret le plus minimaliste.',
  (SELECT id FROM t_items WHERE name = 'chair'),
  (SELECT id FROM t_brand WHERE name = 'ModernLuxe')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Lit à étage',
  'litEtage.jpeg',
  458.8,
  'Pratique pour les petits espaces.',
  (SELECT id FROM t_items WHERE name = 'bed'),
  (SELECT id FROM t_brand WHERE name = 'DreamyBeds')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Bande de led',
  'bandeLed.jfif',
  54.25,
  'Ambiance lumineuse et moderne.',
  (SELECT id FROM t_items WHERE name = 'light'),
  (SELECT id FROM t_brand WHERE name = 'BrightTech')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Lampe de bureau',
  'lampeBureau.jpg',
  17.9,
  'Pratique pour le travail de nuit.',
  (SELECT id FROM t_items WHERE name = 'light'),
  (SELECT id FROM t_brand WHERE name = 'WorkLight')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Tabouret sans pied',
  'tabouret0pied.jpg',
  12.45,
  'Original et design.',
  (SELECT id FROM t_items WHERE name = 'chair'),
  (SELECT id FROM t_brand WHERE name = 'ModernLuxe')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Tabouret sans pied',
  'tabouret0pied.jpg',
  12.45,
  'Pour les amateurs de minimalisme.',
  (SELECT id FROM t_items WHERE name = 'chair'),
  (SELECT id FROM t_brand WHERE name = 'EcoDesign')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Ordinateur portable gaming',
  'PC-Gamer-3-27.jpg',
  1499.99,
  'Performance ultime pour les jeux.',
  (SELECT id FROM t_items WHERE name = 'computer'),
  (SELECT id FROM t_brand WHERE name = 'GamerTech')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'PC de bureau ultra rapide',
  'LD0006159414_0006159428.jpg',
  1299.99,
  'Idéal pour la productivité.',
  (SELECT id FROM t_items WHERE name = 'computer'),
  (SELECT id FROM t_brand WHERE name = 'SpeedyPC')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Téléviseur OLED 65 pouces',
  'DZ-01.jpg',
  1799.0,
  'Qualité d’image exceptionnelle.',
  (SELECT id FROM t_items WHERE name = 'tv'),
  (SELECT id FROM t_brand WHERE name = 'ScreenMax')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Téléviseur 4K LED 50 pouces',
  'smart-tv-led-43p-uhd-samsung.jpg',
  899.0,
  'Expérience cinéma à la maison.',
  (SELECT id FROM t_items WHERE name = 'tv'),
  (SELECT id FROM t_brand WHERE name = 'VisionTech')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Smartphone 5G ultra puissant',
  '70020.jpg',
  1099.9,
  'Fluidité et rapidité imbattables.',
  (SELECT id FROM t_items WHERE name = 'mobilephone'),
  (SELECT id FROM t_brand WHERE name = 'NextGen')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Téléphone Android abordable',
  'telephone-portable-android-1gb-8gb-6-7-processe.webp',
  349.9,
  'Fiable et économique.',
  (SELECT id FROM t_items WHERE name = 'mobilephone'),
  (SELECT id FROM t_brand WHERE name = 'BudgetTech')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Appareil photo reflex professionnel',
  'appareil-photo-compact-canon-powershot-sx730-hs-1791c002aa-5.jpg',
  2499.0,
  'Capteur haute définition.',
  (SELECT id FROM t_items WHERE name = 'camera'),
  (SELECT id FROM t_brand WHERE name = 'PhotoPro')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Caméra d’action 4K',
  '06.jpg',
  299.0,
  'Idéale pour capturer vos exploits.',
  (SELECT id FROM t_items WHERE name = 'camera'),
  (SELECT id FROM t_brand WHERE name = 'AdventureCam')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Clavier mécanique RGB',
  'asdasdadasdqwqwf.jpg',
  129.99,
  'Touches ultra réactives.',
  (SELECT id FROM t_items WHERE name = 'peripheric'),
  (SELECT id FROM t_brand WHERE name = 'TypeMaster')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Souris gaming sans fil',
  '27e0056f-82a4-488b-b60b-0ff9094b5fb3.webp',
  89.99,
  'Précision et rapidité.',
  (SELECT id FROM t_items WHERE name = 'peripheric'),
  (SELECT id FROM t_brand WHERE name = 'SpeedClick')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Canapé en cuir 3 places',
  'Z_592246_A.webp',
  1349.9,
  'Élégance et confort absolu.',
  (SELECT id FROM t_items WHERE name = 'sofa'),
  (SELECT id FROM t_brand WHERE name = 'LuxeLiving')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Canapé d’angle convertible',
  'canape_24737093.jpg',
  799.9,
  'Transformable en lit.',
  (SELECT id FROM t_items WHERE name = 'sofa'),
  (SELECT id FROM t_brand WHERE name = 'FlexiComfort')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Canapé scandinave en tissu',
  '53757-canape-scandinave-4-places-en-tissu-beige-karolina.jpg',
  659.9,
  'Design épuré et chaleureux.',
  (SELECT id FROM t_items WHERE name = 'sofa'),
  (SELECT id FROM t_brand WHERE name = 'NordicStyle')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Lit double en bois massif',
  '2_BRUGGE_CH3H_MH3H_05_A_01_f20c.jpg',
  899.9,
  'Robuste et élégant.',
  (SELECT id FROM t_items WHERE name = 'bed'),
  (SELECT id FROM t_brand WHERE name = 'DreamHome')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Lit avec rangement intégré',
  'meqztwdsdasddia.webp',
  999.9,
  'Pratique et moderne.',
  (SELECT id FROM t_items WHERE name = 'bed'),
  (SELECT id FROM t_brand WHERE name = 'StorageMax')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Table en verre trempé',
  'measd2qwdia.webp',
  449.9,
  'Moderne et résistante.',
  (SELECT id FROM t_items WHERE name = 'table'),
  (SELECT id FROM t_brand WHERE name = 'GlassStyle')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Table à manger extensible',
  'Denver_50_se_Ambiente_perspektive_385d.jpg',
  599.9,
  'Parfaite pour les grandes réunions.',
  (SELECT id FROM t_items WHERE name = 'table'),
  (SELECT id FROM t_brand WHERE name = 'DiningPro')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Chaise de bureau ergonomique',
  '210145_223260_B--rostuhl_LENA_Titel.webp',
  249.99,
  'Confort optimal pour le travail.',
  (SELECT id FROM t_items WHERE name = 'chair'),
  (SELECT id FROM t_brand WHERE name = 'ErgoSeat')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Chaise de salle à manger',
  '54107574_8517_4D54_B550_0C59BF90482D_1aff.jpg',
  119.99,
  'Design sobre et élégant.',
  (SELECT id FROM t_items WHERE name = 'chair'),
  (SELECT id FROM t_brand WHERE name = 'DiningStyle')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Lampe de chevet LED',
  'as.47280202.jpg',
  49.9,
  'Éclairage doux et agréable.',
  (SELECT id FROM t_items WHERE name = 'light'),
  (SELECT id FROM t_brand WHERE name = 'GlowTouch')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Applique murale moderne',
  'DETA_quatre_800x.webp',
  79.9,
  'Design élégant pour intérieur.',
  (SELECT id FROM t_items WHERE name = 'light'),
  (SELECT id FROM t_brand WHERE name = 'WallBright')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'PC portable professionnel',
  'imasaxcewdrsadadges.jpg',
  1299.99,
  'Performance pour le travail.',
  (SELECT id FROM t_items WHERE name = 'computer'),
  (SELECT id FROM t_brand WHERE name = 'WorkPro')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'TV incurvée 75 pouces',
  '75QG03H-1.jpg',
  2299.0,
  'Immersion totale.',
  (SELECT id FROM t_items WHERE name = 'tv'),
  (SELECT id FROM t_brand WHERE name = 'VisionElite')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Souris ergonomique sans fil',
  'ergonomic-rechargeable-24-ghz-bluetooth-wireless-mouse.jpg',
  59.99,
  'Idéale pour le confort.',
  (SELECT id FROM t_items WHERE name = 'peripheric'),
  (SELECT id FROM t_brand WHERE name = 'ErgoMouse')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Lampe LED intelligente',
  '2377_02504_0.webp',
  69.9,
  'Contrôlable par application.',
  (SELECT id FROM t_items WHERE name = 'light'),
  (SELECT id FROM t_brand WHERE name = 'SmartGlow')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Table basse en marbre',
  '685c904a57f017564ccb604a70bee3a4.jpg',
  499.9,
  'Élégance absolue.',
  (SELECT id FROM t_items WHERE name = 'table'),
  (SELECT id FROM t_brand WHERE name = 'LuxuryHome')
);

INSERT INTO t_product (name, image_link, price, description, item_id, brand_id)
VALUES (
  'Fauteuil de relaxation',
  'G_592180_E.webp',
  349.9,
  'Parfait pour se détendre.',
  (SELECT id FROM t_items WHERE name = 'chair'),
  (SELECT id FROM t_brand WHERE name = 'ComfortZen')
);