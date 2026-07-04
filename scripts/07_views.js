const database = db.getSiblingDB("LaTableCommune");

print("Creating reporting views...");

/******************************************************************
 * 07_views.js
 * Project: La Table Commune - MongoDB Restaurant Management System
 * Description: MongoDB views for business reporting
 ******************************************************************/

/******************************************************************
 * 1. SALES DASHBOARD VIEW
 ******************************************************************/

database.sales_dashboard_view.drop();

database.createView(
  "sales_dashboard_view",
  "commande",
  [
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
  ]
);

print("sales_dashboard_view created.");

/******************************************************************
 * 2. CUSTOMER SUMMARY VIEW
 ******************************************************************/

database.customer_summary_view.drop();

database.createView(
  "customer_summary_view",
  "commande",
  [
    {
      $group: {
        _id: "$idClient",
        totalOrders: { $sum: 1 },
        totalSpent: { $sum: "$montantTotal" },
        averageOrderValue: { $avg: "$montantTotal" }
      }
    },
    {
      $lookup: {
        from: "client",
        localField: "_id",
        foreignField: "_id",
        as: "clientInfo"
      }
    },
    { $unwind: "$clientInfo" },
    {
      $project: {
        _id: 0,
        clientId: "$_id",
        clientName: "$clientInfo.nom",
        email: "$clientInfo.courriel",
        totalOrders: 1,
        totalSpent: 1,
        averageOrderValue: { $round: ["$averageOrderValue", 2] }
      }
    },
    { $sort: { totalSpent: -1 } }
  ]
);

print("customer_summary_view created.");

/******************************************************************
 * 3. BRANCH PERFORMANCE VIEW
 ******************************************************************/

database.branch_performance_view.drop();

database.createView(
  "branch_performance_view",
  "commande",
  [
    {
      $group: {
        _id: "$idSuccursale",
        totalOrders: { $sum: 1 },
        totalRevenue: { $sum: "$montantTotal" },
        minOrderValue: { $min: "$montantTotal" },
        maxOrderValue: { $max: "$montantTotal" },
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
        minOrderValue: 1,
        maxOrderValue: 1,
        averageOrderValue: { $round: ["$averageOrderValue", 2] }
      }
    },
    { $sort: { totalRevenue: -1 } }
  ]
);

print("branch_performance_view created.");

/******************************************************************
 * 4. RESERVATION OVERVIEW VIEW
 ******************************************************************/

database.reservation_overview_view.drop();

database.createView(
  "reservation_overview_view",
  "reservation",
  [
    {
      $group: {
        _id: "$idSuccursale",
        totalReservations: { $sum: 1 }
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
        totalReservations: 1
      }
    },
    { $sort: { totalReservations: -1 } }
  ]
);

print("reservation_overview_view created.");

print("\nAll reporting views created successfully.");