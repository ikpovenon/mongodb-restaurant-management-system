const database = db.getSiblingDB("LaTableCommune");

print("Applying collection validation rules...");

/******************************************************************
 * 05_validation_schema.js
 * Project: La Table Commune - MongoDB Restaurant Management System
 * Description: Collection validation using JSON Schema
 ******************************************************************/

/******************************************************************
 * COMMANDE
 ******************************************************************/

database.runCommand({
  collMod: "commande",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "idClient",
        "idSuccursale",
        "dateCommande",
        "montantTotal",
        "statutCommande"
      ],
      properties: {
        idClient: {
          bsonType: "objectId",
          description: "Must be a valid ObjectId."
        },
        idSuccursale: {
          bsonType: "objectId",
          description: "Must be a valid ObjectId."
        },
        dateCommande: {
          bsonType: "date",
          description: "Must be a valid date."
        },
        montantTotal: {
          bsonType: ["double", "int", "long", "decimal"],
          minimum: 0,
          description: "Must be a positive amount."
        },
        statutCommande: {
          bsonType: "string",
          enum: [
            "Pending",
            "Confirmed",
            "Preparing",
            "Ready",
            "Delivered",
            "Cancelled"
          ]
        }
      }
    }
  },
  validationLevel: "moderate"
});

print("commande validation applied.");

/******************************************************************
 * CLIENT
 ******************************************************************/

database.runCommand({
  collMod: "client",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nom",
        "courriel"
      ],
      properties: {
        nom: {
          bsonType: "string"
        },
        courriel: {
          bsonType: "string"
        },
        telephone: {
          bsonType: "string"
        }
      }
    }
  },
  validationLevel: "moderate"
});

print("client validation applied.");

/******************************************************************
 * PLAT
 ******************************************************************/

database.runCommand({
  collMod: "plat",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nomPlat",
        "prix",
        "idCategorie"
      ],
      properties: {
        nomPlat: {
          bsonType: "string"
        },
        prix: {
          bsonType: ["double", "int", "long", "decimal"],
          minimum: 0
        },
        disponible: {
          bsonType: "bool"
        }
      }
    }
  },
  validationLevel: "moderate"
});

print("plat validation applied.");

/******************************************************************
 * INGREDIENT
 ******************************************************************/

database.runCommand({
  collMod: "ingredient",
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nomIngredient",
        "quantiteStock"
      ],
      properties: {
        nomIngredient: {
          bsonType: "string"
        },
        quantiteStock: {
          bsonType: ["double", "int", "long", "decimal"],
          minimum: 0
        }
      }
    }
  },
  validationLevel: "moderate"
});

print("ingredient validation applied.");

print("\nSchema validation completed successfully.");