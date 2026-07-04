const database = db.getSiblingDB("LaTableCommune");

print("Connected to database: LaTableCommune");

/******************************************************************
 * 04_aggregation_queries.js
 * Project: La Table Commune - MongoDB Restaurant Management System
 * Description: Analytical aggregation queries for business reporting
 ******************************************************************/

/******************************************************************
 * 1. SALES ANALYTICS
 ******************************************************************/

print("\n1.1 Revenue by branch");
database.commande.aggregate([
  {
    $group: {
      _id: "$idSuccursale",
      totalOrders: { $sum: 1 },
      totalRevenue: { $sum: "$montantTotal" },
      averageOrderValue: { $avg: "$montantTotal" }
    }
  },
  { $sort: { totalRevenue: -1 } }
]).forEach(printjson);

print("\n1.2 Monthly revenue");
database.commande.aggregate([
  {
    $group: {
      _id: {
        year: { $year: "$dateCommande" },
        month: { $month: "$dateCommande" }
      },
      totalOrders: { $sum: 1 },
      totalRevenue: { $sum: "$montantTotal" }
    }
  },
  { $sort: { "_id.year": 1, "_id.month": 1 } }
]).forEach(printjson);

print("\n1.3 Average order value");
database.commande.aggregate([
  {
    $group: {
      _id: null,
      totalOrders: { $sum: 1 },
      averageOrderValue: { $avg: "$montantTotal" }
    }
  }
]).forEach(printjson);

print("\n1.4 Orders by status");
database.commande.aggregate([
  {
    $group: {
      _id: "$statutCommande",
      totalOrders: { $sum: 1 }
    }
  },
  { $sort: { totalOrders: -1 } }
]).forEach(printjson);

/******************************************************************
 * 2. CUSTOMER ANALYTICS
 ******************************************************************/

print("\n2.1 Top 10 customers by revenue");
database.commande.aggregate([
  {
    $group: {
      _id: "$idClient",
      totalOrders: { $sum: 1 },
      totalSpent: { $sum: "$montantTotal" }
    }
  },
  { $sort: { totalSpent: -1 } },
  { $limit: 10 }
]).forEach(printjson);

print("\n2.2 Customer order frequency");
database.commande.aggregate([
  {
    $group: {
      _id: "$idClient",
      totalOrders: { $sum: 1 },
      totalSpent: { $sum: "$montantTotal" }
    }
  },
  { $sort: { totalOrders: -1 } }
]).forEach(printjson);

/******************************************************************
 * 3. MENU ANALYTICS
 ******************************************************************/

print("\n3.1 Most ordered dishes");
database.commande.aggregate([
  { $unwind: "$lignesCommande" },
  {
    $group: {
      _id: "$lignesCommande.idPlat",
      totalQuantitySold: { $sum: "$lignesCommande.quantite" },
      totalRevenue: {
        $sum: {
          $multiply: [
            "$lignesCommande.quantite",
            "$lignesCommande.prixUnitaire"
          ]
        }
      }
    }
  },
  { $sort: { totalQuantitySold: -1 } }
]).forEach(printjson);

print("\n3.2 Revenue by dish");
database.commande.aggregate([
  { $unwind: "$lignesCommande" },
  {
    $group: {
      _id: "$lignesCommande.idPlat",
      totalQuantitySold: { $sum: "$lignesCommande.quantite" },
      totalRevenue: {
        $sum: {
          $multiply: [
            "$lignesCommande.quantite",
            "$lignesCommande.prixUnitaire"
          ]
        }
      }
    }
  },
  { $sort: { totalRevenue: -1 } }
]).forEach(printjson);

print("\n3.3 Available dishes by category");
database.plat.aggregate([
  { $match: { disponible: true } },
  {
    $group: {
      _id: "$idCategorie",
      availableDishes: { $sum: 1 }
    }
  },
  { $sort: { availableDishes: -1 } }
]).forEach(printjson);

/******************************************************************
 * 4. RESERVATION ANALYTICS
 ******************************************************************/

print("\n4.1 Reservations by branch");
database.reservation.aggregate([
  {
    $group: {
      _id: "$idSuccursale",
      totalReservations: { $sum: 1 }
    }
  },
  { $sort: { totalReservations: -1 } }
]).forEach(printjson);

print("\n4.2 Reservations by date");
database.reservation.aggregate([
  {
    $group: {
      _id: "$dateReservation",
      totalReservations: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]).forEach(printjson);

/******************************************************************
 * 5. DELIVERY ANALYTICS
 ******************************************************************/

print("\n5.1 Deliveries by status");
database.livraison.aggregate([
  {
    $group: {
      _id: "$statutLivraison",
      totalDeliveries: { $sum: 1 }
    }
  },
  { $sort: { totalDeliveries: -1 } }
]).forEach(printjson);

print("\n5.2 Deliveries by courier");
database.livraison.aggregate([
  {
    $group: {
      _id: "$idLivreur",
      totalDeliveries: { $sum: 1 }
    }
  },
  { $sort: { totalDeliveries: -1 } }
]).forEach(printjson);

/******************************************************************
 * 6. INVENTORY ANALYTICS
 ******************************************************************/

print("\n6.1 Ingredients with low stock");
database.ingredient.aggregate([
  {
    $match: {
      quantiteStock: { $lte: 10 }
    }
  },
  {
    $project: {
      _id: 1,
      nomIngredient: 1,
      quantiteStock: 1,
      unite: 1
    }
  },
  { $sort: { quantiteStock: 1 } }
]).forEach(printjson);

/******************************************************************
 * 7. BRANCH ANALYTICS
 ******************************************************************/

print("\n7.1 Global branch performance");
database.commande.aggregate([
  {
    $group: {
      _id: "$idSuccursale",
      totalOrders: { $sum: 1 },
      totalRevenue: { $sum: "$montantTotal" },
      averageOrderValue: { $avg: "$montantTotal" }
    }
  },
  {
    $lookup: {
      from: "succursale",
      localField: "_id",
      foreignField: "_id",
      as: "branchInfo"
    }
  },
  { $unwind: "$branchInfo" },
  {
    $project: {
      _id: 0,
      branchId: "$_id",
      branchName: "$branchInfo.nomSuccursale",
      city: "$branchInfo.ville",
      totalOrders: 1,
      totalRevenue: 1,
      averageOrderValue: { $round: ["$averageOrderValue", 2] }
    }
  },
  { $sort: { totalRevenue: -1 } }
]).forEach(printjson);

print("\nAll aggregation queries executed successfully.");