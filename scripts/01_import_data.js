// ==========================================================
// PROJET MONGODB - SCRIPT FINAL CORRIGE
// Base : LaTableCommune
//
// ==========================================================


// ==========================================================
// 1) Base
// ==========================================================
//Base : LaTableCommune


// ==========================================================
// 2)  CREATION / SELECTION DE LA BASE
// ==========================================================
db = db.getSiblingDB("LaTableCommune");


// ==========================================================
// 3) CREATION DES COLLECTIONS
// ==========================================================
db.createCollection("groupeRestaurant");
db.createCollection("succursale");
db.createCollection("table");
db.createCollection("client");
db.createCollection("reservation");
db.createCollection("commande");
db.createCollection("livraison");
db.createCollection("livreur");
db.createCollection("categorie");
db.createCollection("plat");
db.createCollection("ingredient");
db.createCollection("compositionPlat");
db.createCollection("promotion");
db.createCollection("employe");
db.createCollection("commentaires");


// ==========================================================
// 4) INDEX
// ==========================================================
db.client.createIndex({ email: 1 }, { unique: true });
db.promotion.createIndex({ codePromo: 1 }, { unique: true });
db.commande.createIndex({ idClient: 1 });
db.commande.createIndex({ idSuccursale: 1 });
db.livraison.createIndex({ idCommande: 1 }, { unique: true });

// Index utiles pour commentaires
db.commentaires.createIndex({ idClient: 1 });
db.commentaires.createIndex({ idCommande: 1 });
db.commentaires.createIndex({ idLivraison: 1 });


// ==========================================================
// 5) PREPARATION DES IDENTIFIANTS
// ==========================================================

// 1 seul groupe restaurant
const groupeId = new ObjectId();

// 10 succursales
const succ1 = new ObjectId();
const succ2 = new ObjectId();
const succ3 = new ObjectId();
const succ4 = new ObjectId();
const succ5 = new ObjectId();
const succ6 = new ObjectId();
const succ7 = new ObjectId();
const succ8 = new ObjectId();
const succ9 = new ObjectId();
const succ10 = new ObjectId();

// 10 tables
const tab1 = new ObjectId();
const tab2 = new ObjectId();
const tab3 = new ObjectId();
const tab4 = new ObjectId();
const tab5 = new ObjectId();
const tab6 = new ObjectId();
const tab7 = new ObjectId();
const tab8 = new ObjectId();
const tab9 = new ObjectId();
const tab10 = new ObjectId();

// 10 clients
const cli1 = new ObjectId();
const cli2 = new ObjectId();
const cli3 = new ObjectId();
const cli4 = new ObjectId();
const cli5 = new ObjectId();
const cli6 = new ObjectId();
const cli7 = new ObjectId();
const cli8 = new ObjectId();
const cli9 = new ObjectId();
const cli10 = new ObjectId();

// 10 catégories
const cat1 = new ObjectId();
const cat2 = new ObjectId();
const cat3 = new ObjectId();
const cat4 = new ObjectId();
const cat5 = new ObjectId();
const cat6 = new ObjectId();
const cat7 = new ObjectId();
const cat8 = new ObjectId();
const cat9 = new ObjectId();
const cat10 = new ObjectId();

// 10 plats
const plat1 = new ObjectId();
const plat2 = new ObjectId();
const plat3 = new ObjectId();
const plat4 = new ObjectId();
const plat5 = new ObjectId();
const plat6 = new ObjectId();
const plat7 = new ObjectId();
const plat8 = new ObjectId();
const plat9 = new ObjectId();
const plat10 = new ObjectId();

// 10 ingrédients
const ing1 = new ObjectId();
const ing2 = new ObjectId();
const ing3 = new ObjectId();
const ing4 = new ObjectId();
const ing5 = new ObjectId();
const ing6 = new ObjectId();
const ing7 = new ObjectId();
const ing8 = new ObjectId();
const ing9 = new ObjectId();
const ing10 = new ObjectId();

// 10 promotions
const promo1 = new ObjectId();
const promo2 = new ObjectId();
const promo3 = new ObjectId();
const promo4 = new ObjectId();
const promo5 = new ObjectId();
const promo6 = new ObjectId();
const promo7 = new ObjectId();
const promo8 = new ObjectId();
const promo9 = new ObjectId();
const promo10 = new ObjectId();

// 10 employés
const emp1 = new ObjectId();
const emp2 = new ObjectId();
const emp3 = new ObjectId();
const emp4 = new ObjectId();
const emp5 = new ObjectId();
const emp6 = new ObjectId();
const emp7 = new ObjectId();
const emp8 = new ObjectId();
const emp9 = new ObjectId();
const emp10 = new ObjectId();

// 10 livreurs
const livr1 = new ObjectId();
const livr2 = new ObjectId();
const livr3 = new ObjectId();
const livr4 = new ObjectId();
const livr5 = new ObjectId();
const livr6 = new ObjectId();
const livr7 = new ObjectId();
const livr8 = new ObjectId();
const livr9 = new ObjectId();
const livr10 = new ObjectId();

// 10 réservations
const res1 = new ObjectId();
const res2 = new ObjectId();
const res3 = new ObjectId();
const res4 = new ObjectId();
const res5 = new ObjectId();
const res6 = new ObjectId();
const res7 = new ObjectId();
const res8 = new ObjectId();
const res9 = new ObjectId();
const res10 = new ObjectId();

// 12 commandes (10 en ligne + 2 sur place)
const cmd1 = new ObjectId();
const cmd2 = new ObjectId();
const cmd3 = new ObjectId();
const cmd4 = new ObjectId();
const cmd5 = new ObjectId();
const cmd6 = new ObjectId();
const cmd7 = new ObjectId();
const cmd8 = new ObjectId();
const cmd9 = new ObjectId();
const cmd10 = new ObjectId();
const cmd11 = new ObjectId();
const cmd12 = new ObjectId();

// 10 livraisons
const liv1 = new ObjectId();
const liv2 = new ObjectId();
const liv3 = new ObjectId();
const liv4 = new ObjectId();
const liv5 = new ObjectId();
const liv6 = new ObjectId();
const liv7 = new ObjectId();
const liv8 = new ObjectId();
const liv9 = new ObjectId();
const liv10 = new ObjectId();

// 10 lignes de composition
const comp1 = new ObjectId();
const comp2 = new ObjectId();
const comp3 = new ObjectId();
const comp4 = new ObjectId();
const comp5 = new ObjectId();
const comp6 = new ObjectId();
const comp7 = new ObjectId();
const comp8 = new ObjectId();
const comp9 = new ObjectId();
const comp10 = new ObjectId();

// 10 commentaires
const com1 = new ObjectId();
const com2 = new ObjectId();
const com3 = new ObjectId();
const com4 = new ObjectId();
const com5 = new ObjectId();
const com6 = new ObjectId();
const com7 = new ObjectId();
const com8 = new ObjectId();
const com9 = new ObjectId();
const com10 = new ObjectId();


// ==========================================================
// 6) INSERTION : GROUPE RESTAURANT (1 document)
// ==========================================================
db.groupeRestaurant.insertOne({
  _id: groupeId,
  nomGroupe: "LaTableCommune",
  siegeSocial: "1250 boulevard Saint-Laurent, Montréal",
  telephoneSiege: "5145551000",
  emailSiege: "contact@LaTableCommune.ca",
  siteWeb: "www.LaTableCommune.ca",
  dateCreation: new Date("2020-01-15"),
  statut: "actif",
  conseilAdministration: [
    { nom: "Jean Dupont", role: "Président", telephone: "5145552001", email: "jean.dupont@latablecommune.ca" },
    { nom: "Marie Koffi", role: "Vice-présidente", telephone: "5145552002", email: "marie.koffi@latablecommune.ca" },
    { nom: "Paul Martin", role: "Secrétaire", telephone: "5145552003", email: "paul.martin@latablecommune.ca" },
    { nom: "Nadia Tremblay", role: "Trésorière", telephone: "5145552004", email: "nadia.tremblay@latablecommune.ca" },
    { nom: "Samuel Roy", role: "Administrateur", telephone: "5145552005", email: "samuel.roy@latablecommune.ca" },
    { nom: "Amina Diallo", role: "Administratrice", telephone: "5145552006", email: "amina.diallo@latablecommune.ca" },
    { nom: "David Akakpo", role: "Administrateur", telephone: "5145552007", email: "david.akakpo@latablecommune.ca" },
    { nom: "Claire Bouchard", role: "Administratrice", telephone: "5145552008", email: "claire.bouchard@latablecommune.ca" },
    { nom: "Lucas Bernard", role: "Administrateur", telephone: "5145552009", email: "lucas.bernard@latablecommune.ca" },
    { nom: "Fatou Sagna", role: "Administratrice", telephone: "5145552010", email: "fatou.sagna@latablecommune.ca" }
  ]
});


// ==========================================================
// 7) INSERTION : SUCCURSALE (10)
// ==========================================================
db.succursale.insertMany([
  {
    _id: succ1,
    nomSuccursale: "Succursale Aylmer",
    adresse: { rue: "10 rue Principale", ville: "Gatineau", province: "QC", codePostal: "J9H1A1" },
    telephone: "8195553001",
    email: "aylmer@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  },
  {
    _id: succ2,
    nomSuccursale: "Succursale Hull",
    adresse: { rue: "25 boulevard Taché", ville: "Gatineau", province: "QC", codePostal: "J8X2V3" },
    telephone: "8195553002",
    email: "hull@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  },
  {
    _id: succ3,
    nomSuccursale: "Succursale Ottawa Centre",
    adresse: { rue: "100 Rideau Street", ville: "Ottawa", province: "ON", codePostal: "K1N5X8" },
    telephone: "6135553003",
    email: "ottawacentre@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  },
  {
    _id: succ4,
    nomSuccursale: "Succursale Kanata",
    adresse: { rue: "200 Kanata Ave", ville: "Ottawa", province: "ON", codePostal: "K2T1K5" },
    telephone: "6135553004",
    email: "kanata@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  },
  {
    _id: succ5,
    nomSuccursale: "Succursale Montréal Centre",
    adresse: { rue: "300 rue Sainte-Catherine", ville: "Montréal", province: "QC", codePostal: "H2X3X2" },
    telephone: "5145553005",
    email: "montrealcentre@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  },
  {
    _id: succ6,
    nomSuccursale: "Succursale Laval",
    adresse: { rue: "150 boulevard Le Corbusier", ville: "Laval", province: "QC", codePostal: "H7N0A8" },
    telephone: "4505553006",
    email: "laval@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  },
  {
    _id: succ7,
    nomSuccursale: "Succursale Longueuil",
    adresse: { rue: "75 chemin Chambly", ville: "Longueuil", province: "QC", codePostal: "J4H3M5" },
    telephone: "4505553007",
    email: "longueuil@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  },
  {
    _id: succ8,
    nomSuccursale: "Succursale Québec",
    adresse: { rue: "500 avenue Cartier", ville: "Québec", province: "QC", codePostal: "G1R2S9" },
    telephone: "4185553008",
    email: "quebec@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  },
  {
    _id: succ9,
    nomSuccursale: "Succursale Sherbrooke",
    adresse: { rue: "40 rue King Ouest", ville: "Sherbrooke", province: "QC", codePostal: "J1H1P8" },
    telephone: "8195553009",
    email: "sherbrooke@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  },
  {
    _id: succ10,
    nomSuccursale: "Succursale Trois-Rivières",
    adresse: { rue: "60 boulevard des Forges", ville: "Trois-Rivières", province: "QC", codePostal: "G9A2G8" },
    telephone: "8195553010",
    email: "troisrivieres@latablecommune.ca",
    horaires: {
      lundi: "09:00-21:00",
      mardi: "09:00-21:00",
      mercredi: "09:00-21:00",
      jeudi: "09:00-22:00",
      vendredi: "09:00-22:00",
      samedi: "10:00-22:00",
      dimanche: "10:00-20:00"
    },
    statut: "actif",
    idGroupe: groupeId
  }
]);


// ==========================================================
// 8) INSERTION : TABLE (10)
// ==========================================================
db.table.insertMany([
  { _id: tab1, numeroTable: 1, capacite: 2, zone: "Salle A", statutTable: "libre", idSuccursale: succ1 },
  { _id: tab2, numeroTable: 2, capacite: 4, zone: "Salle A", statutTable: "occupée", idSuccursale: succ2 },
  { _id: tab3, numeroTable: 3, capacite: 6, zone: "Terrasse", statutTable: "libre", idSuccursale: succ3 },
  { _id: tab4, numeroTable: 4, capacite: 2, zone: "Salle B", statutTable: "réservée", idSuccursale: succ4 },
  { _id: tab5, numeroTable: 5, capacite: 4, zone: "Salle B", statutTable: "libre", idSuccursale: succ5 },
  { _id: tab6, numeroTable: 6, capacite: 8, zone: "VIP", statutTable: "libre", idSuccursale: succ6 },
  { _id: tab7, numeroTable: 7, capacite: 2, zone: "Terrasse", statutTable: "occupée", idSuccursale: succ7 },
  { _id: tab8, numeroTable: 8, capacite: 4, zone: "Salle A", statutTable: "libre", idSuccursale: succ8 },
  { _id: tab9, numeroTable: 9, capacite: 6, zone: "Salle C", statutTable: "réservée", idSuccursale: succ9 },
  { _id: tab10, numeroTable: 10, capacite: 4, zone: "Salle C", statutTable: "libre", idSuccursale: succ10 }
]);


// ==========================================================
// 9) INSERTION : CLIENT (10)
// ==========================================================
db.client.insertMany([
  {
    _id: cli1,
    nom: "Kpovenon",
    prenom: "Ista",
    telephone: "8196000001",
    email: "ista@mail.com",
    dateInscription: new Date("2025-01-10"),
    pointsFidelite: 120,
    adressePrincipale: { rue: "11 rue des Fleurs", ville: "Gatineau", province: "QC", codePostal: "J9H2A1" }
  },
  {
    _id: cli2,
    nom: "Doe",
    prenom: "John",
    telephone: "8196000002",
    email: "john@mail.com",
    dateInscription: new Date("2025-02-12"),
    pointsFidelite: 45,
    adressePrincipale: { rue: "22 Elm Street", ville: "Ottawa", province: "ON", codePostal: "K1A0A1" }
  },
  {
    _id: cli3,
    nom: "Smith",
    prenom: "Anna",
    telephone: "8196000003",
    email: "anna@mail.com",
    dateInscription: new Date("2025-03-05"),
    pointsFidelite: 85,
    adressePrincipale: { rue: "33 rue Laurier", ville: "Montréal", province: "QC", codePostal: "H2X1A1" }
  },
  {
    _id: cli4,
    nom: "Jones",
    prenom: "Paul",
    telephone: "8196000004",
    email: "paul@mail.com",
    dateInscription: new Date("2025-03-19"),
    pointsFidelite: 10,
    adressePrincipale: { rue: "44 Maple Ave", ville: "Québec", province: "QC", codePostal: "G1K1A1" }
  },
  {
    _id: cli5,
    nom: "Lee",
    prenom: "Sara",
    telephone: "8196000005",
    email: "sara@mail.com",
    dateInscription: new Date("2025-04-21"),
    pointsFidelite: 95,
    adressePrincipale: { rue: "55 Pine Street", ville: "Laval", province: "QC", codePostal: "H7N1A1" }
  },
  {
    _id: cli6,
    nom: "Brown",
    prenom: "Mike",
    telephone: "8196000006",
    email: "mike@mail.com",
    dateInscription: new Date("2025-05-08"),
    pointsFidelite: 20,
    adressePrincipale: { rue: "66 River Road", ville: "Longueuil", province: "QC", codePostal: "J4K1A1" }
  },
  {
    _id: cli7,
    nom: "White",
    prenom: "Nina",
    telephone: "8196000007",
    email: "nina@mail.com",
    dateInscription: new Date("2025-06-10"),
    pointsFidelite: 60,
    adressePrincipale: { rue: "77 Queen Street", ville: "Sherbrooke", province: "QC", codePostal: "J1H1A1" }
  },
  {
    _id: cli8,
    nom: "Green",
    prenom: "Alex",
    telephone: "8196000008",
    email: "alex@mail.com",
    dateInscription: new Date("2025-07-02"),
    pointsFidelite: 35,
    adressePrincipale: { rue: "88 Wellington", ville: "Ottawa", province: "ON", codePostal: "K1P1A1" }
  },
  {
    _id: cli9,
    nom: "Black",
    prenom: "Emma",
    telephone: "8196000009",
    email: "emma@mail.com",
    dateInscription: new Date("2025-08-14"),
    pointsFidelite: 140,
    adressePrincipale: { rue: "99 rue Saint-Paul", ville: "Montréal", province: "QC", codePostal: "H2Y1A1" }
  },
  {
    _id: cli10,
    nom: "Blue",
    prenom: "Leo",
    telephone: "8196000010",
    email: "leo@mail.com",
    dateInscription: new Date("2025-09-01"),
    pointsFidelite: 75,
    adressePrincipale: { rue: "101 rue Royale", ville: "Québec", province: "QC", codePostal: "G1R1A1" }
  }
]);


// ==========================================================
// 10) INSERTION : CATEGORIE (10)
// ==========================================================
db.categorie.insertMany([
  { _id: cat1, nomCategorie: "Pizza", description: "Pizzas classiques et spéciales" },
  { _id: cat2, nomCategorie: "Burger", description: "Burgers maison" },
  { _id: cat3, nomCategorie: "Pâtes", description: "Pâtes fraîches" },
  { _id: cat4, nomCategorie: "Salade", description: "Salades variées" },
  { _id: cat5, nomCategorie: "Dessert", description: "Desserts maison" },
  { _id: cat6, nomCategorie: "Boisson", description: "Boissons froides et chaudes" },
  { _id: cat7, nomCategorie: "Poulet", description: "Plats à base de poulet" },
  { _id: cat8, nomCategorie: "Poisson", description: "Plats de poisson" },
  { _id: cat9, nomCategorie: "Végétarien", description: "Plats sans viande" },
  { _id: cat10, nomCategorie: "Sandwich", description: "Sandwichs variés" }
]);


// ==========================================================
// 11) INSERTION : PLAT (10)
// ==========================================================
db.plat.insertMany([
  { _id: plat1, nomPlat: "Pizza Margherita", description: "Pizza tomate et mozzarella", prix: 15, disponible: true, idCategorie: cat1 },
  { _id: plat2, nomPlat: "Burger Classic", description: "Burger bœuf maison", prix: 12, disponible: true, idCategorie: cat2 },
  { _id: plat3, nomPlat: "Spaghetti Bolognaise", description: "Pâtes sauce bolognaise", prix: 14, disponible: true, idCategorie: cat3 },
  { _id: plat4, nomPlat: "Salade César", description: "Salade, poulet, parmesan", prix: 10, disponible: true, idCategorie: cat4 },
  { _id: plat5, nomPlat: "Tiramisu", description: "Dessert italien", prix: 8, disponible: true, idCategorie: cat5 },
  { _id: plat6, nomPlat: "Coca-Cola", description: "Boisson gazeuse 355 ml", prix: 3, disponible: true, idCategorie: cat6 },
  { _id: plat7, nomPlat: "Poulet rôti", description: "Poulet rôti et légumes", prix: 18, disponible: true, idCategorie: cat7 },
  { _id: plat8, nomPlat: "Saumon grillé", description: "Saumon et légumes sautés", prix: 20, disponible: true, idCategorie: cat8 },
  { _id: plat9, nomPlat: "Bol végétarien", description: "Riz, légumes, tofu", prix: 13, disponible: true, idCategorie: cat9 },
  { _id: plat10, nomPlat: "Sandwich jambon-fromage", description: "Sandwich grillé", prix: 9, disponible: true, idCategorie: cat10 }
]);


// ==========================================================
// 12) INSERTION : INGREDIENT (10)
// ==========================================================
db.ingredient.insertMany([
  { _id: ing1, nomIngredient: "Mozzarella", quantiteStock: 25, seuilAlerte: 5, uniteMesure: "kg", idSuccursale: succ1 },
  { _id: ing2, nomIngredient: "Tomate", quantiteStock: 30, seuilAlerte: 8, uniteMesure: "kg", idSuccursale: succ2 },
  { _id: ing3, nomIngredient: "Bœuf haché", quantiteStock: 18, seuilAlerte: 5, uniteMesure: "kg", idSuccursale: succ3 },
  { _id: ing4, nomIngredient: "Pain burger", quantiteStock: 50, seuilAlerte: 10, uniteMesure: "unités", idSuccursale: succ4 },
  { _id: ing5, nomIngredient: "Pâtes", quantiteStock: 40, seuilAlerte: 10, uniteMesure: "kg", idSuccursale: succ5 },
  { _id: ing6, nomIngredient: "Poulet", quantiteStock: 22, seuilAlerte: 6, uniteMesure: "kg", idSuccursale: succ6 },
  { _id: ing7, nomIngredient: "Parmesan", quantiteStock: 12, seuilAlerte: 3, uniteMesure: "kg", idSuccursale: succ7 },
  { _id: ing8, nomIngredient: "Saumon", quantiteStock: 16, seuilAlerte: 4, uniteMesure: "kg", idSuccursale: succ8 },
  { _id: ing9, nomIngredient: "Tofu", quantiteStock: 10, seuilAlerte: 3, uniteMesure: "kg", idSuccursale: succ9 },
  { _id: ing10, nomIngredient: "Jambon", quantiteStock: 15, seuilAlerte: 4, uniteMesure: "kg", idSuccursale: succ10 }
]);


// ==========================================================
// 13) INSERTION : COMPOSITIONPLAT (10)
// ==========================================================
db.compositionPlat.insertMany([
  { _id: comp1, idPlat: plat1, idIngredient: ing1, quantiteNecessaire: 0.20, uniteMesure: "kg" },
  { _id: comp2, idPlat: plat1, idIngredient: ing2, quantiteNecessaire: 0.15, uniteMesure: "kg" },
  { _id: comp3, idPlat: plat2, idIngredient: ing3, quantiteNecessaire: 0.18, uniteMesure: "kg" },
  { _id: comp4, idPlat: plat2, idIngredient: ing4, quantiteNecessaire: 1, uniteMesure: "unité" },
  { _id: comp5, idPlat: plat3, idIngredient: ing5, quantiteNecessaire: 0.25, uniteMesure: "kg" },
  { _id: comp6, idPlat: plat4, idIngredient: ing6, quantiteNecessaire: 0.12, uniteMesure: "kg" },
  { _id: comp7, idPlat: plat4, idIngredient: ing7, quantiteNecessaire: 0.05, uniteMesure: "kg" },
  { _id: comp8, idPlat: plat8, idIngredient: ing8, quantiteNecessaire: 0.20, uniteMesure: "kg" },
  { _id: comp9, idPlat: plat9, idIngredient: ing9, quantiteNecessaire: 0.18, uniteMesure: "kg" },
  { _id: comp10, idPlat: plat10, idIngredient: ing10, quantiteNecessaire: 0.10, uniteMesure: "kg" }
]);


// ==========================================================
// 14) INSERTION : PROMOTION (10)
// ==========================================================
db.promotion.insertMany([
  {
    _id: promo1,
    codePromo: "PROMO10",
    description: "Rabais de 10%",
    pourcentageRabais: 10,
    dateDebut: new Date("2026-01-01"),
    dateFin: new Date("2026-12-31"),
    statut: "active",
    idSuccursale: succ1
  },
  {
    _id: promo2,
    codePromo: "AYLMER5",
    description: "5$ de réduction",
    pourcentageRabais: 0,
    valeurReduction: 5,
    dateDebut: new Date("2026-01-01"),
    dateFin: new Date("2026-06-30"),
    statut: "active",
    idSuccursale: succ2
  },
  {
    _id: promo3,
    codePromo: "BURGER15",
    description: "Rabais burger 15%",
    pourcentageRabais: 15,
    dateDebut: new Date("2026-02-01"),
    dateFin: new Date("2026-12-31"),
    statut: "active",
    idSuccursale: succ3
  },
  {
    _id: promo4,
    codePromo: "PASTA12",
    description: "Rabais pâtes 12%",
    pourcentageRabais: 12,
    dateDebut: new Date("2026-02-15"),
    dateFin: new Date("2026-11-30"),
    statut: "active",
    idSuccursale: succ4
  },
  {
    _id: promo5,
    codePromo: "DESSERT8",
    description: "Rabais dessert 8%",
    pourcentageRabais: 8,
    dateDebut: new Date("2026-03-01"),
    dateFin: new Date("2026-12-31"),
    statut: "active",
    idSuccursale: succ5
  },
  {
    _id: promo6,
    codePromo: "BOISSON2",
    description: "2$ de réduction sur boisson",
    pourcentageRabais: 0,
    valeurReduction: 2,
    dateDebut: new Date("2026-01-10"),
    dateFin: new Date("2026-10-31"),
    statut: "active",
    idSuccursale: succ6
  },
  {
    _id: promo7,
    codePromo: "POULET7",
    description: "Rabais poulet 7%",
    pourcentageRabais: 7,
    dateDebut: new Date("2026-01-20"),
    dateFin: new Date("2026-09-30"),
    statut: "active",
    idSuccursale: succ7
  },
  {
    _id: promo8,
    codePromo: "POISSON9",
    description: "Rabais poisson 9%",
    pourcentageRabais: 9,
    dateDebut: new Date("2026-02-10"),
    dateFin: new Date("2026-08-31"),
    statut: "active",
    idSuccursale: succ8
  },
  {
    _id: promo9,
    codePromo: "VEGE11",
    description: "Rabais végétarien 11%",
    pourcentageRabais: 11,
    dateDebut: new Date("2026-03-15"),
    dateFin: new Date("2026-12-31"),
    statut: "active",
    idSuccursale: succ9
  },
  {
    _id: promo10,
    codePromo: "SAND6",
    description: "Rabais sandwich 6%",
    pourcentageRabais: 6,
    dateDebut: new Date("2026-01-05"),
    dateFin: new Date("2026-07-31"),
    statut: "active",
    idSuccursale: succ10
  }
]);


// ==========================================================
// 15) INSERTION : EMPLOYE (10)
// ==========================================================
db.employe.insertMany([
  { _id: emp1, nom: "Tremblay", prenom: "Luc", poste: "Gérant", telephone: "8197000001", email: "luc.tremblay@latablecommune.ca", salaire: 4500, statut: "actif", idSuccursale: succ1 },
  { _id: emp2, nom: "Roy", prenom: "Julie", poste: "Serveuse", telephone: "8197000002", email: "julie.roy@latablecommune.ca", salaire: 2800, statut: "actif", idSuccursale: succ2 },
  { _id: emp3, nom: "Bouchard", prenom: "Eric", poste: "Cuisinier", telephone: "8197000003", email: "eric.bouchard@latablecommune.ca", salaire: 3200, statut: "actif", idSuccursale: succ3 },
  { _id: emp4, nom: "Koffi", prenom: "Mireille", poste: "Caissière", telephone: "8197000004", email: "mireille.koffi@latablecommune.ca", salaire: 2600, statut: "actif", idSuccursale: succ4 },
  { _id: emp5, nom: "Diallo", prenom: "Awa", poste: "Cuisinière", telephone: "8197000005", email: "awa.diallo@latablecommune.ca", salaire: 3300, statut: "actif", idSuccursale: succ5 },
  { _id: emp6, nom: "Martin", prenom: "Olivier", poste: "Gérant", telephone: "8197000006", email: "olivier.martin@latablecommune.ca", salaire: 4600, statut: "actif", idSuccursale: succ6 },
  { _id: emp7, nom: "Sagna", prenom: "Fatou", poste: "Serveuse", telephone: "8197000007", email: "fatou.sagna@latablecommune.ca", salaire: 2750, statut: "actif", idSuccursale: succ7 },
  { _id: emp8, nom: "Bernard", prenom: "Louis", poste: "Chef", telephone: "8197000008", email: "louis.bernard@latablecommune.ca", salaire: 3800, statut: "actif", idSuccursale: succ8 },
  { _id: emp9, nom: "Akakpo", prenom: "David", poste: "Plongeur", telephone: "8197000009", email: "david.akakpo@latablecommune.ca", salaire: 2400, statut: "actif", idSuccursale: succ9 },
  { _id: emp10, nom: "Claire", prenom: "Nadia", poste: "Assistante-gérante", telephone: "8197000010", email: "nadia.claire@latablecommune.ca", salaire: 3400, statut: "actif", idSuccursale: succ10 }
]);


// ==========================================================
// 16) INSERTION : LIVREUR (10)
// ==========================================================
db.livreur.insertMany([
  { _id: livr1, nom: "Mensah", prenom: "Kojo", telephone: "8198000001", email: "kojo.mensah@latablecommune.ca", vehicule: "Toyota Corolla", statut: "actif" },
  { _id: livr2, nom: "Lopez", prenom: "Carlos", telephone: "8198000002", email: "carlos.lopez@latablecommune.ca", vehicule: "Honda Civic", statut: "actif" },
  { _id: livr3, nom: "Nguyen", prenom: "Linh", telephone: "8198000003", email: "linh.nguyen@latablecommune.ca", vehicule: "Hyundai Elantra", statut: "actif" },
  { _id: livr4, nom: "Traoré", prenom: "Moussa", telephone: "8198000004", email: "moussa.traore@latablecommune.ca", vehicule: "Nissan Sentra", statut: "actif" },
  { _id: livr5, nom: "Chen", prenom: "Mei", telephone: "8198000005", email: "mei.chen@latablecommune.ca", vehicule: "Kia Forte", statut: "actif" },
  { _id: livr6, nom: "Ali", prenom: "Rachid", telephone: "8198000006", email: "rachid.ali@latablecommune.ca", vehicule: "Mazda 3", statut: "actif" },
  { _id: livr7, nom: "Singh", prenom: "Arjun", telephone: "8198000007", email: "arjun.singh@latablecommune.ca", vehicule: "Volkswagen Jetta", statut: "actif" },
  { _id: livr8, nom: "Fall", prenom: "Aïcha", telephone: "8198000008", email: "aicha.fall@latablecommune.ca", vehicule: "Ford Focus", statut: "actif" },
  { _id: livr9, nom: "Kamara", prenom: "Ibrahim", telephone: "8198000009", email: "ibrahim.kamara@latablecommune.ca", vehicule: "Chevrolet Cruze", statut: "actif" },
  { _id: livr10, nom: "Moreau", prenom: "Sophie", telephone: "8198000010", email: "sophie.moreau@latablecommune.ca", vehicule: "Subaru Impreza", statut: "actif" }
]);


// ==========================================================
// 17) INSERTION : RESERVATION (10)
// ==========================================================
db.reservation.insertMany([
  { _id: res1, idClient: cli1, idSuccursale: succ1, idTable: tab1, dateReservation: new Date("2026-03-21"), heure: "18:00", nombrePersonnes: 2, statutReservation: "confirmée" },
  { _id: res2, idClient: cli2, idSuccursale: succ2, idTable: tab2, dateReservation: new Date("2026-03-22"), heure: "19:00", nombrePersonnes: 4, statutReservation: "confirmée" },
  { _id: res3, idClient: cli3, idSuccursale: succ3, idTable: tab3, dateReservation: new Date("2026-03-23"), heure: "18:30", nombrePersonnes: 5, statutReservation: "confirmée" },
  { _id: res4, idClient: cli4, idSuccursale: succ4, idTable: tab4, dateReservation: new Date("2026-03-24"), heure: "20:00", nombrePersonnes: 2, statutReservation: "annulée" },
  { _id: res5, idClient: cli5, idSuccursale: succ5, idTable: tab5, dateReservation: new Date("2026-03-25"), heure: "17:30", nombrePersonnes: 4, statutReservation: "confirmée" },
  { _id: res6, idClient: cli6, idSuccursale: succ6, idTable: tab6, dateReservation: new Date("2026-03-26"), heure: "19:30", nombrePersonnes: 6, statutReservation: "confirmée" },
  { _id: res7, idClient: cli7, idSuccursale: succ7, idTable: tab7, dateReservation: new Date("2026-03-27"), heure: "18:15", nombrePersonnes: 2, statutReservation: "en attente" },
  { _id: res8, idClient: cli8, idSuccursale: succ8, idTable: tab8, dateReservation: new Date("2026-03-28"), heure: "20:15", nombrePersonnes: 4, statutReservation: "confirmée" },
  { _id: res9, idClient: cli9, idSuccursale: succ9, idTable: tab9, dateReservation: new Date("2026-03-29"), heure: "18:45", nombrePersonnes: 5, statutReservation: "confirmée" },
  { _id: res10, idClient: cli10, idSuccursale: succ10, idTable: tab10, dateReservation: new Date("2026-03-30"), heure: "19:45", nombrePersonnes: 4, statutReservation: "confirmée" }
]);


// ==========================================================
// 18) INSERTION : COMMANDE (12 = 10 EN LIGNE + 2 SUR PLACE)
// ==========================================================
db.commande.insertMany([
  {
    _id: cmd1,
    idClient: cli1,
    idSuccursale: succ1,
    idPromotion: promo1,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T11:00:00"),
    statutCommande: "préparée",
    lignesCommande: [
      { idPlat: plat1, nomPlat: "Pizza Margherita", quantite: 2, prixUnitaire: 15 },
      { idPlat: plat6, nomPlat: "Coca-Cola", quantite: 2, prixUnitaire: 3 }
    ],
    montantSousTotal: 36,
    montantPromo: 3.6,
    taxes: 4.86,
    montantTotal: 37.26,
    paiement: {
      mode: "carte",
      statut: "payé",
      datePaiement: new Date("2026-03-20T11:02:00"),
      referenceTransaction: "TXN1001"
    },
    adresseLivraison: { rue: "11 rue des Fleurs", ville: "Gatineau", province: "QC", codePostal: "J9H2A1" }
  },
  {
    _id: cmd2,
    idClient: cli2,
    idSuccursale: succ2,
    idPromotion: promo2,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T11:15:00"),
    statutCommande: "en_cours",
    lignesCommande: [
      { idPlat: plat2, nomPlat: "Burger Classic", quantite: 1, prixUnitaire: 12 },
      { idPlat: plat10, nomPlat: "Sandwich jambon-fromage", quantite: 1, prixUnitaire: 9 }
    ],
    montantSousTotal: 21,
    montantPromo: 5,
    taxes: 2.4,
    montantTotal: 18.4,
    paiement: {
      mode: "carte",
      statut: "payé",
      datePaiement: new Date("2026-03-20T11:16:00"),
      referenceTransaction: "TXN1002"
    },
    adresseLivraison: { rue: "22 Elm Street", ville: "Ottawa", province: "ON", codePostal: "K1A0A1" }
  },
  {
    _id: cmd3,
    idClient: cli3,
    idSuccursale: succ3,
    idPromotion: promo3,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T11:30:00"),
    statutCommande: "en_cours",
    lignesCommande: [
      { idPlat: plat3, nomPlat: "Spaghetti Bolognaise", quantite: 2, prixUnitaire: 14 }
    ],
    montantSousTotal: 28,
    montantPromo: 4.2,
    taxes: 3.09,
    montantTotal: 26.89,
    paiement: {
      mode: "carte",
      statut: "payé",
      datePaiement: new Date("2026-03-20T11:31:00"),
      referenceTransaction: "TXN1003"
    },
    adresseLivraison: { rue: "33 rue Laurier", ville: "Montréal", province: "QC", codePostal: "H2X1A1" }
  },
  {
    _id: cmd4,
    idClient: cli4,
    idSuccursale: succ4,
    idPromotion: promo4,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T12:00:00"),
    statutCommande: "préparée",
    lignesCommande: [
      { idPlat: plat4, nomPlat: "Salade César", quantite: 1, prixUnitaire: 10 },
      { idPlat: plat6, nomPlat: "Coca-Cola", quantite: 1, prixUnitaire: 3 }
    ],
    montantSousTotal: 13,
    montantPromo: 1.56,
    taxes: 1.71,
    montantTotal: 13.15,
    paiement: {
      mode: "espèces",
      statut: "payé",
      datePaiement: new Date("2026-03-20T12:02:00"),
      referenceTransaction: "TXN1004"
    },
    adresseLivraison: { rue: "44 Maple Ave", ville: "Québec", province: "QC", codePostal: "G1K1A1" }
  },
  {
    _id: cmd5,
    idClient: cli5,
    idSuccursale: succ5,
    idPromotion: promo5,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T12:20:00"),
    statutCommande: "livrée",
    lignesCommande: [
      { idPlat: plat5, nomPlat: "Tiramisu", quantite: 2, prixUnitaire: 8 },
      { idPlat: plat6, nomPlat: "Coca-Cola", quantite: 2, prixUnitaire: 3 }
    ],
    montantSousTotal: 22,
    montantPromo: 1.76,
    taxes: 2.53,
    montantTotal: 22.77,
    paiement: {
      mode: "carte",
      statut: "payé",
      datePaiement: new Date("2026-03-20T12:21:00"),
      referenceTransaction: "TXN1005"
    },
    adresseLivraison: { rue: "55 Pine Street", ville: "Laval", province: "QC", codePostal: "H7N1A1" }
  },
  {
    _id: cmd6,
    idClient: cli6,
    idSuccursale: succ6,
    idPromotion: promo6,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T12:45:00"),
    statutCommande: "en_cours",
    lignesCommande: [
      { idPlat: plat7, nomPlat: "Poulet rôti", quantite: 1, prixUnitaire: 18 },
      { idPlat: plat6, nomPlat: "Coca-Cola", quantite: 1, prixUnitaire: 3 }
    ],
    montantSousTotal: 21,
    montantPromo: 2,
    taxes: 2.85,
    montantTotal: 21.85,
    paiement: {
      mode: "mobile",
      statut: "payé",
      datePaiement: new Date("2026-03-20T12:46:00"),
      referenceTransaction: "TXN1006"
    },
    adresseLivraison: { rue: "66 River Road", ville: "Longueuil", province: "QC", codePostal: "J4K1A1" }
  },
  {
    _id: cmd7,
    idClient: cli7,
    idSuccursale: succ7,
    idPromotion: promo7,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T13:10:00"),
    statutCommande: "préparée",
    lignesCommande: [
      { idPlat: plat7, nomPlat: "Poulet rôti", quantite: 2, prixUnitaire: 18 }
    ],
    montantSousTotal: 36,
    montantPromo: 2.52,
    taxes: 5.01,
    montantTotal: 38.49,
    paiement: {
      mode: "carte",
      statut: "payé",
      datePaiement: new Date("2026-03-20T13:12:00"),
      referenceTransaction: "TXN1007"
    },
    adresseLivraison: { rue: "77 Queen Street", ville: "Sherbrooke", province: "QC", codePostal: "J1H1A1" }
  },
  {
    _id: cmd8,
    idClient: cli8,
    idSuccursale: succ8,
    idPromotion: promo8,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T13:25:00"),
    statutCommande: "en_cours",
    lignesCommande: [
      { idPlat: plat8, nomPlat: "Saumon grillé", quantite: 1, prixUnitaire: 20 }
    ],
    montantSousTotal: 20,
    montantPromo: 1.8,
    taxes: 2.72,
    montantTotal: 20.92,
    paiement: {
      mode: "carte",
      statut: "payé",
      datePaiement: new Date("2026-03-20T13:26:00"),
      referenceTransaction: "TXN1008"
    },
    adresseLivraison: { rue: "88 Wellington", ville: "Ottawa", province: "ON", codePostal: "K1P1A1" }
  },
  {
    _id: cmd9,
    idClient: cli9,
    idSuccursale: succ9,
    idPromotion: promo9,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T13:40:00"),
    statutCommande: "livrée",
    lignesCommande: [
      { idPlat: plat9, nomPlat: "Bol végétarien", quantite: 2, prixUnitaire: 13 }
    ],
    montantSousTotal: 26,
    montantPromo: 2.86,
    taxes: 3.47,
    montantTotal: 26.61,
    paiement: {
      mode: "mobile",
      statut: "payé",
      datePaiement: new Date("2026-03-20T13:41:00"),
      referenceTransaction: "TXN1009"
    },
    adresseLivraison: { rue: "99 rue Saint-Paul", ville: "Montréal", province: "QC", codePostal: "H2Y1A1" }
  },
  {
    _id: cmd10,
    idClient: cli10,
    idSuccursale: succ10,
    idPromotion: promo10,
    type: "en_ligne",
    dateCommande: new Date("2026-03-20T14:00:00"),
    statutCommande: "préparée",
    lignesCommande: [
      { idPlat: plat10, nomPlat: "Sandwich jambon-fromage", quantite: 2, prixUnitaire: 9 },
      { idPlat: plat6, nomPlat: "Coca-Cola", quantite: 2, prixUnitaire: 3 }
    ],
    montantSousTotal: 24,
    montantPromo: 1.44,
    taxes: 3.38,
    montantTotal: 25.94,
    paiement: {
      mode: "carte",
      statut: "payé",
      datePaiement: new Date("2026-03-20T14:01:00"),
      referenceTransaction: "TXN1010"
    },
    adresseLivraison: { rue: "101 rue Royale", ville: "Québec", province: "QC", codePostal: "G1R1A1" }
  },
  {
    _id: cmd11,
    idClient: cli1,
    idSuccursale: succ1,
    idPromotion: promo1,
    type: "sur_place",
    dateCommande: new Date("2026-03-20T18:10:00"),
    statutCommande: "servie",
    idTable: tab1,
    lignesCommande: [
      { idPlat: plat2, nomPlat: "Burger Classic", quantite: 1, prixUnitaire: 12 },
      { idPlat: plat5, nomPlat: "Tiramisu", quantite: 1, prixUnitaire: 8 }
    ],
    montantSousTotal: 20,
    montantPromo: 2,
    taxes: 2.7,
    montantTotal: 20.7,
    paiement: {
      mode: "carte",
      statut: "payé",
      datePaiement: new Date("2026-03-20T19:00:00"),
      referenceTransaction: "TXN1011"
    }
  },
  {
    _id: cmd12,
    idClient: cli2,
    idSuccursale: succ2,
    idPromotion: promo2,
    type: "sur_place",
    dateCommande: new Date("2026-03-20T18:30:00"),
    statutCommande: "payée",
    idTable: tab2,
    lignesCommande: [
      { idPlat: plat3, nomPlat: "Spaghetti Bolognaise", quantite: 1, prixUnitaire: 14 },
      { idPlat: plat6, nomPlat: "Coca-Cola", quantite: 1, prixUnitaire: 3 }
    ],
    montantSousTotal: 17,
    montantPromo: 5,
    taxes: 1.8,
    montantTotal: 13.8,
    paiement: {
      mode: "espèces",
      statut: "payé",
      datePaiement: new Date("2026-03-20T19:05:00"),
      referenceTransaction: "TXN1012"
    }
  }
]);


// ==========================================================
// 19) INSERTION : LIVRAISON (10)
// ==========================================================
db.livraison.insertMany([
  { _id: liv1, idCommande: cmd1, idLivreur: livr1, statutLivraison: "livrée", heureDepart: new Date("2026-03-20T11:20:00"), heureLivraison: new Date("2026-03-20T11:45:00") },
  { _id: liv2, idCommande: cmd2, idLivreur: livr2, statutLivraison: "en cours", heureDepart: new Date("2026-03-20T11:35:00"), heureLivraison: null },
  { _id: liv3, idCommande: cmd3, idLivreur: livr3, statutLivraison: "en cours", heureDepart: new Date("2026-03-20T11:50:00"), heureLivraison: null },
  { _id: liv4, idCommande: cmd4, idLivreur: livr4, statutLivraison: "en cours", heureDepart: new Date("2026-03-20T12:20:00"), heureLivraison: null },
  { _id: liv5, idCommande: cmd5, idLivreur: livr5, statutLivraison: "livrée", heureDepart: new Date("2026-03-20T12:35:00"), heureLivraison: new Date("2026-03-20T13:05:00") },
  { _id: liv6, idCommande: cmd6, idLivreur: livr6, statutLivraison: "en cours", heureDepart: new Date("2026-03-20T13:00:00"), heureLivraison: null },
  { _id: liv7, idCommande: cmd7, idLivreur: livr7, statutLivraison: "en préparation", heureDepart: null, heureLivraison: null },
  { _id: liv8, idCommande: cmd8, idLivreur: livr8, statutLivraison: "en cours", heureDepart: new Date("2026-03-20T13:40:00"), heureLivraison: null },
  { _id: liv9, idCommande: cmd9, idLivreur: livr9, statutLivraison: "livrée", heureDepart: new Date("2026-03-20T13:55:00"), heureLivraison: new Date("2026-03-20T14:25:00") },
  { _id: liv10, idCommande: cmd10, idLivreur: livr10, statutLivraison: "en préparation", heureDepart: null, heureLivraison: null }
]);


// ==========================================================
// 20) INSERTION : COMMENTAIRES (10)
// Références vers client + commande(sur_place) + livraison
// idCommande référence uniquement cmd11 et cmd12 (sur place)
// idLivraison référence les livraisons en ligne
// ==========================================================
db.commentaires.insertMany([
  {
    _id: com1,
    idClient: cli1,
    idCommande: cmd11,
    idLivraison: liv1,
    note: 5,
    contenu: "Excellent service sur place et livraison très ponctuelle."
  },
  {
    _id: com2,
    idClient: cli2,
    idCommande: cmd12,
    idLivraison: liv2,
    note: 4,
    contenu: "Très bonne expérience globale, le repas était chaud."
  },
  {
    _id: com3,
    idClient: cli3,
    idCommande: cmd11,
    idLivraison: liv3,
    note: 5,
    contenu: "Commande satisfaisante et personnel courtois."
  },
  {
    _id: com4,
    idClient: cli4,
    idCommande: cmd12,
    idLivraison: liv4,
    note: 3,
    contenu: "Le service était correct, mais un peu d'attente."
  },
  {
    _id: com5,
    idClient: cli5,
    idCommande: cmd11,
    idLivraison: liv5,
    note: 5,
    contenu: "Dessert excellent et livraison rapide."
  },
  {
    _id: com6,
    idClient: cli6,
    idCommande: cmd12,
    idLivraison: liv6,
    note: 4,
    contenu: "Bon rapport qualité-prix et personnel aimable."
  },
  {
    _id: com7,
    idClient: cli7,
    idCommande: cmd11,
    idLivraison: liv7,
    note: 4,
    contenu: "Très bon repas, expérience positive dans l'ensemble."
  },
  {
    _id: com8,
    idClient: cli8,
    idCommande: cmd12,
    idLivraison: liv8,
    note: 5,
    contenu: "La qualité du plat était excellente."
  },
  {
    _id: com9,
    idClient: cli9,
    idCommande: cmd11,
    idLivraison: liv9,
    note: 5,
    contenu: "Service impeccable et livreur professionnel."
  },
  {
    _id: com10,
    idClient: cli10,
    idCommande: cmd12,
    idLivraison: liv10,
    note: 4,
    contenu: "Bonne expérience, je recommanderais ce restaurant."
  }
]);


// ==========================================================
// 21) VERIFICATIONS RAPIDES
// ==========================================================
print("=== VERIFICATION DES INSERTIONS ===");
print("groupeRestaurant : " + db.groupeRestaurant.countDocuments());
print("succursale       : " + db.succursale.countDocuments());
print("table            : " + db.table.countDocuments());
print("client           : " + db.client.countDocuments());
print("reservation      : " + db.reservation.countDocuments());
print("commande         : " + db.commande.countDocuments());
print("livraison        : " + db.livraison.countDocuments());
print("livreur          : " + db.livreur.countDocuments());
print("categorie        : " + db.categorie.countDocuments());
print("plat             : " + db.plat.countDocuments());
print("ingredient       : " + db.ingredient.countDocuments());
print("compositionPlat  : " + db.compositionPlat.countDocuments());
print("promotion        : " + db.promotion.countDocuments());
print("employe          : " + db.employe.countDocuments());
print("commentaires     : " + db.commentaires.countDocuments());

print("=== FIN DU SCRIPT ===");