const database = db.getSiblingDB("LaTableCommune");

print("Running MongoDB performance tests...");

/******************************************************************
 * 09_performance_tests.js
 * Project: La Table Commune - MongoDB Restaurant Management System
 * Description: Query performance analysis using explain()
 ******************************************************************/

function printExecutionStats(title, explainResult) {
  print("\n" + title);
  printjson({
    executionTimeMillis: explainResult.executionStats.executionTimeMillis,
    totalDocsExamined: explainResult.executionStats.totalDocsExamined,
    totalKeysExamined: explainResult.executionStats.totalKeysExamined,
    documentsReturned: explainResult.executionStats.nReturned,
    winningPlan: explainResult.queryPlanner.winningPlan
  });
}

/******************************************************************
 * 1. PERFORMANCE TEST: Orders by branch
 ******************************************************************/

const ordersByBranchExplain = database.commande
  .find({ idSuccursale: { $exists: true } })
  .explain("executionStats");

printExecutionStats(
  "1. Orders by branch - Index usage test",
  ordersByBranchExplain
);

/******************************************************************
 * 2. PERFORMANCE TEST: Orders by status
 ******************************************************************/

const ordersByStatusExplain = database.commande
  .find({ statutCommande: "Delivered" })
  .explain("executionStats");

printExecutionStats(
  "2. Orders by status - Index usage test",
  ordersByStatusExplain
);

/******************************************************************
 * 3. PERFORMANCE TEST: Orders by date
 ******************************************************************/

const ordersByDateExplain = database.commande
  .find({
    dateCommande: {
      $gte: new Date("2026-01-01"),
      $lte: new Date("2026-12-31")
    }
  })
  .explain("executionStats");

printExecutionStats(
  "3. Orders by date - Index usage test",
  ordersByDateExplain
);

/******************************************************************
 * 4. PERFORMANCE TEST: Customers by email
 ******************************************************************/

const customerEmailExplain = database.client
  .find({ courriel: { $exists: true } })
  .explain("executionStats");

printExecutionStats(
  "4. Customer email - Index usage test",
  customerEmailExplain
);

/******************************************************************
 * 5. PERFORMANCE TEST: Low stock ingredients
 ******************************************************************/

const lowStockExplain = database.ingredient
  .find({ quantiteStock: { $lte: 10 } })
  .explain("executionStats");

printExecutionStats(
  "5. Low stock ingredients - Index usage test",
  lowStockExplain
);

/******************************************************************
 * 6. AGGREGATION PERFORMANCE TEST
 ******************************************************************/

print("\n6. Aggregation performance test - Revenue by branch");

const aggregationExplain = database.commande.explain("executionStats").aggregate([
  {
    $group: {
      _id: "$idSuccursale",
      totalOrders: { $sum: 1 },
      totalRevenue: { $sum: "$montantTotal" }
    }
  },
  {
    $sort: {
      totalRevenue: -1
    }
  }
]);

printjson({
  executionStats: aggregationExplain.executionStats,
  queryPlanner: aggregationExplain.queryPlanner
});

/******************************************************************
 * 7. INDEX VERIFICATION
 ******************************************************************/

print("\n7. Existing indexes by collection");

print("\nIndexes on commande:");
printjson(database.commande.getIndexes());

print("\nIndexes on client:");
printjson(database.client.getIndexes());

print("\nIndexes on ingredient:");
printjson(database.ingredient.getIndexes());

print("\nPerformance tests completed successfully.");