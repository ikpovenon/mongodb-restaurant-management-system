const database = db.getSiblingDB("LaTableCommune");

print("Creating indexes for LaTableCommune...");

/******************************************************************
 * 03_create_indexes.js
 * Project: La Table Commune - MongoDB Restaurant Management System
 * Description: Index creation for performance optimization
 ******************************************************************/

/******************************************************************
 * CLIENT INDEXES
 ******************************************************************/

database.client.createIndex(
  { email: 1 },
  { unique: true }
);

/******************************************************************
 * PROMOTION INDEXES
 ******************************************************************/

database.promotion.createIndex(
  { codePromo: 1 },
  { unique: true }
);

/******************************************************************
 * COMMANDE INDEXES
 ******************************************************************/

database.commande.createIndex({ idClient: 1 });

database.commande.createIndex({ idSuccursale: 1 });

database.commande.createIndex({
  idClient: 1,
  dateCommande: -1
});

database.commande.createIndex({ statutCommande: 1 });

database.commande.createIndex({ dateCommande: 1 });

/******************************************************************
 * LIVRAISON INDEXES
 ******************************************************************/

database.livraison.createIndex(
  { idCommande: 1 },
  { unique: true }
);

/******************************************************************
 * RESERVATION INDEXES
 ******************************************************************/

database.reservation.createIndex({
  idSuccursale: 1,
  dateReservation: 1,
  heureReservation: 1,
  idTable: 1
});

database.reservation.createIndex({ dateReservation: 1 });

/******************************************************************
 * PLAT INDEXES
 ******************************************************************/

database.plat.createIndex({
  idCategorie: 1,
  disponible: 1
});

/******************************************************************
 * INGREDIENT INDEXES
 ******************************************************************/

database.ingredient.createIndex({ quantiteStock: 1 });

print("Indexes created successfully.");