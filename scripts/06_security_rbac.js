const database = db.getSiblingDB("LaTableCommune");

print("RBAC Security Configuration - La Table Commune");

/******************************************************************
 * 06_security_rbac.js
 * Project: La Table Commune - MongoDB Restaurant Management System
 * Description: RBAC security documentation for MongoDB Atlas
 ******************************************************************/

print("\nMongoDB Atlas does not allow createRole from this script.");
print("RBAC must be configured in Atlas UI: Database Access section.");

print("\nRecommended users:");

printjson({
  user: "readonlyUser",
  purpose: "Read-only reporting access",
  privileges: ["read"],
  database: "LaTableCommune"
});

printjson({
  user: "dataEntryUser",
  purpose: "Operational data entry access",
  privileges: ["readWrite"],
  database: "LaTableCommune"
});

printjson({
  user: "managerUser",
  purpose: "Management and reporting access",
  privileges: ["readWrite"],
  database: "LaTableCommune"
});

print("\nRecommended security practices:");

printjson([
  "Use strong passwords.",
  "Apply least privilege principle.",
  "Avoid using admin credentials in application scripts.",
  "Store connection strings in environment variables.",
  "Restrict network access using IP allowlist in MongoDB Atlas.",
  "Rotate credentials periodically."
]);

print("\nRBAC security documentation completed successfully.");