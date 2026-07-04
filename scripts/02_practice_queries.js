// ==========================================================
// PROJET MONGODB - 50 REQUÊTES 
// Base : LaTableCommune
// Version alignée avec le script final actualisé
// ==========================================================


// ==========================================================
// 1) SELECTION DE LA BASE
// ==========================================================
db = db.getSiblingDB("LaTableCommune");


// ==========================================================
// REQUÊTE 1
// Afficher tous les clients
// Notion : find simple
// ==========================================================
db.client.find();


// ==========================================================
// REQUÊTE 2
// Afficher nom, prénom, email et points fidélité
// Notion : projection
// ==========================================================
db.client.find(
  {},
  { _id: 0, nom: 1, prenom: 1, email: 1, pointsFidelite: 1 }
);


// ==========================================================
// REQUÊTE 3
// Afficher les clients qui habitent à Gatineau
// Notion : filtre sur champ imbriqué
// ==========================================================
db.client.find(
  { "adressePrincipale.ville": "Gatineau" },
  { _id: 0, nom: 1, prenom: 1, "adressePrincipale.ville": 1 }
);


// ==========================================================
// REQUÊTE 4
// Afficher les clients ayant plus de 80 points fidélité
// Notion : opérateur $gt
// ==========================================================
db.client.find(
  { pointsFidelite: { $gt: 80 } },
  { _id: 0, nom: 1, prenom: 1, pointsFidelite: 1 }
);


// ==========================================================
// REQUÊTE 5
// Trier les clients par points fidélité décroissants
// Notion : sort
// ==========================================================
db.client.find(
  {},
  { _id: 0, nom: 1, prenom: 1, pointsFidelite: 1 }
).sort({ pointsFidelite: -1 });


// ==========================================================
// REQUÊTE 6
// Afficher les 5 plats les moins chers
// Notion : sort + limit
// ==========================================================
db.plat.find(
  {},
  { _id: 0, nomPlat: 1, prix: 1 }
).sort({ prix: 1 }).limit(5);


// ==========================================================
// REQUÊTE 7
// Afficher les plats disponibles
// Notion : filtre booléen
// ==========================================================
db.plat.find(
  { disponible: true },
  { _id: 0, nomPlat: 1, description: 1, prix: 1 }
);


// ==========================================================
// REQUÊTE 8
// Afficher les commandes en ligne
// Notion : filtre simple
// ==========================================================
db.commande.find(
  { type: "en_ligne" },
  { _id: 1, type: 1, statutCommande: 1, montantTotal: 1, adresseLivraison: 1 }
);


// ==========================================================
// REQUÊTE 9
// Afficher les commandes sur place
// Notion : filtre simple
// ==========================================================
db.commande.find(
  { type: "sur_place" },
  { _id: 1, type: 1, statutCommande: 1, montantTotal: 1, idTable: 1 }
);


// ==========================================================
// REQUÊTE 10
// Afficher les commandes dont le montant total est supérieur à 25
// Notion : comparaison
// ==========================================================
db.commande.find(
  { montantTotal: { $gt: 25 } },
  { _id: 1, type: 1, montantSousTotal: 1, montantPromo: 1, taxes: 1, montantTotal: 1 }
);


// ==========================================================
// REQUÊTE 11
// Afficher les commandes payées par carte
// Notion : filtre sur objet imbriqué
// ==========================================================
db.commande.find(
  { "paiement.mode": "carte" },
  { _id: 1, type: 1, statutCommande: 1, "paiement.mode": 1, "paiement.statut": 1 }
);


// ==========================================================
// REQUÊTE 12
// Afficher les commandes contenant le plat "Pizza Margherita"
// Notion : recherche dans tableau imbriqué
// ==========================================================
db.commande.find(
  { "lignesCommande.nomPlat": "Pizza Margherita" },
  { _id: 1, type: 1, lignesCommande: 1, montantTotal: 1 }
);


// ==========================================================
// REQUÊTE 13
// Afficher les commandes ayant au moins 2 lignesCommande
// Notion : $expr + $size
// ==========================================================
db.commande.find(
  {
    $expr: {
      $gte: [{ $size: "$lignesCommande" }, 2]
    }
  },
  { _id: 1, type: 1, lignesCommande: 1 }
);


// ==========================================================
// REQUÊTE 14
// Mettre à jour le statut d'une commande en ligne
// Notion : updateOne
// ==========================================================
db.commande.updateOne(
  { type: "en_ligne" },
  { $set: { statutCommande: "livrée" } }
);


// ==========================================================
// REQUÊTE 15
// Ajouter 20 points fidélité au client Ista
// Notion : $inc
// ==========================================================
db.client.updateOne(
  { email: "ista@mail.com" },
  { $inc: { pointsFidelite: 20 } }
);


// ==========================================================
// REQUÊTE 16
// Rendre disponibles tous les plats de prix inférieur à 10
// Notion : updateMany
// ==========================================================
db.plat.updateMany(
  { prix: { $lt: 10 } },
  { $set: { disponible: true } }
);


// ==========================================================
// REQUÊTE 17
// Supprimer une réservation annulée
// Notion : deleteOne
// ==========================================================
db.reservation.deleteOne(
  { statutReservation: "annulée" }
);


// ==========================================================
// REQUÊTE 18
// Compter le nombre total de clients
// Notion : countDocuments
// ==========================================================
db.client.countDocuments();


// ==========================================================
// REQUÊTE 19
// Compter le nombre de commandes en ligne
// Notion : countDocuments avec filtre
// ==========================================================
db.commande.countDocuments({ type: "en_ligne" });


// ==========================================================
// REQUÊTE 20
// Afficher les ingrédients dont le stock est faible
// Notion : comparaison entre deux champs avec $expr
// ==========================================================
db.ingredient.find(
  {
    $expr: {
      $lte: ["$quantiteStock", "$seuilAlerte"]
    }
  },
  { _id: 0, nomIngredient: 1, quantiteStock: 1, seuilAlerte: 1, uniteMesure: 1 }
);


// ==========================================================
// REQUÊTE 21
// Afficher les promotions actives aujourd'hui
// Notion : filtre sur dates
// ==========================================================
db.promotion.find(
  {
    dateDebut: { $lte: new Date() },
    dateFin: { $gte: new Date() },
    statut: "active"
  },
  { _id: 0, codePromo: 1, description: 1, pourcentageRabais: 1, valeurReduction: 1 }
);


// ==========================================================
// REQUÊTE 22
// Joindre les plats avec leur catégorie
// Notion : $lookup
// ==========================================================
db.plat.aggregate([
  {
    $lookup: {
      from: "categorie",
      localField: "idCategorie",
      foreignField: "_id",
      as: "categorieInfo"
    }
  },
  {
    $project: {
      _id: 0,
      nomPlat: 1,
      prix: 1,
      categorie: { $arrayElemAt: ["$categorieInfo.nomCategorie", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 23
// Joindre les commandes avec les clients
// Notion : $lookup
// ==========================================================
db.commande.aggregate([
  {
    $lookup: {
      from: "client",
      localField: "idClient",
      foreignField: "_id",
      as: "clientInfo"
    }
  },
  {
    $project: {
      _id: 1,
      type: 1,
      statutCommande: 1,
      montantTotal: 1,
      clientNom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      clientPrenom: { $arrayElemAt: ["$clientInfo.prenom", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 24
// Calculer le nombre de commandes par type
// Notion : $group
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: "$type",
      nombreCommandes: { $sum: 1 }
    }
  }
]);


// ==========================================================
// REQUÊTE 25
// Calculer le montant total des ventes
// Notion : $group + $sum
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: null,
      totalVentes: { $sum: "$montantTotal" }
    }
  }
]);


// ==========================================================
// REQUÊTE 26
// Calculer le montant moyen des commandes
// Notion : $avg
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: null,
      moyenneCommandes: { $avg: "$montantTotal" }
    }
  }
]);


// ==========================================================
// REQUÊTE 27
// Afficher le total dépensé par client
// Notion : $group + $lookup + $sort
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: "$idClient",
      totalDepense: { $sum: "$montantTotal" },
      nombreCommandes: { $sum: 1 }
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
  {
    $project: {
      _id: 0,
      clientNom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      clientPrenom: { $arrayElemAt: ["$clientInfo.prenom", 0] },
      totalDepense: 1,
      nombreCommandes: 1
    }
  },
  { $sort: { totalDepense: -1 } }
]);


// ==========================================================
// REQUÊTE 28
// Afficher le nombre de plats par catégorie
// Notion : $group + $lookup
// ==========================================================
db.plat.aggregate([
  {
    $group: {
      _id: "$idCategorie",
      nombrePlats: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "categorie",
      localField: "_id",
      foreignField: "_id",
      as: "categorieInfo"
    }
  },
  {
    $project: {
      _id: 0,
      categorie: { $arrayElemAt: ["$categorieInfo.nomCategorie", 0] },
      nombrePlats: 1
    }
  }
]);


// ==========================================================
// REQUÊTE 29
// Afficher les plats les plus commandés
// Notion : $unwind + $group + $sort
// ==========================================================
db.commande.aggregate([
  { $unwind: "$lignesCommande" },
  {
    $group: {
      _id: "$lignesCommande.nomPlat",
      quantiteTotale: { $sum: "$lignesCommande.quantite" }
    }
  },
  { $sort: { quantiteTotale: -1 } }
]);


// ==========================================================
// REQUÊTE 30
// Calculer le chiffre d'affaires par mode de paiement
// Notion : group sur champ imbriqué
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: "$paiement.mode",
      totalPaiements: { $sum: "$montantTotal" },
      nombreOperations: { $sum: 1 }
    }
  },
  { $sort: { totalPaiements: -1 } }
]);


// ==========================================================
// REQUÊTE 31
// Afficher les clients ayant passé au moins 2 commandes
// Notion : $group + $match + $lookup
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: "$idClient",
      nombreCommandes: { $sum: 1 }
    }
  },
  {
    $match: {
      nombreCommandes: { $gte: 2 }
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
  {
    $project: {
      _id: 0,
      nom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      prenom: { $arrayElemAt: ["$clientInfo.prenom", 0] },
      nombreCommandes: 1
    }
  }
]);


// ==========================================================
// REQUÊTE 32
// Afficher le nombre de commandes par ville de livraison
// Notion : group sur champ imbriqué
// ==========================================================
db.commande.aggregate([
  {
    $match: {
      type: "en_ligne",
      "adresseLivraison.ville": { $exists: true, $ne: null }
    }
  },
  {
    $group: {
      _id: "$adresseLivraison.ville",
      nombreCommandes: { $sum: 1 }
    }
  },
  { $sort: { nombreCommandes: -1 } }
]);


// ==========================================================
// REQUÊTE 33
// Joindre livraisons et livreurs
// Notion : $lookup
// ==========================================================
db.livraison.aggregate([
  {
    $lookup: {
      from: "livreur",
      localField: "idLivreur",
      foreignField: "_id",
      as: "livreurInfo"
    }
  },
  {
    $project: {
      _id: 1,
      statutLivraison: 1,
      heureDepart: 1,
      heureLivraison: 1,
      livreurNom: { $arrayElemAt: ["$livreurInfo.nom", 0] },
      livreurPrenom: { $arrayElemAt: ["$livreurInfo.prenom", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 34
// Afficher les ingrédients utilisés par chaque plat
// Notion : double $lookup
// ==========================================================
db.compositionPlat.aggregate([
  {
    $lookup: {
      from: "plat",
      localField: "idPlat",
      foreignField: "_id",
      as: "platInfo"
    }
  },
  {
    $lookup: {
      from: "ingredient",
      localField: "idIngredient",
      foreignField: "_id",
      as: "ingredientInfo"
    }
  },
  {
    $project: {
      _id: 0,
      plat: { $arrayElemAt: ["$platInfo.nomPlat", 0] },
      ingredient: { $arrayElemAt: ["$ingredientInfo.nomIngredient", 0] },
      quantiteNecessaire: 1,
      uniteMesure: 1
    }
  }
]);


// ==========================================================
// REQUÊTE 35
// Calculer le nombre de livraisons par livreur
// Notion : $group + $lookup
// ==========================================================
db.livraison.aggregate([
  {
    $group: {
      _id: "$idLivreur",
      nombreLivraisons: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "livreur",
      localField: "_id",
      foreignField: "_id",
      as: "livreurInfo"
    }
  },
  {
    $project: {
      _id: 0,
      nom: { $arrayElemAt: ["$livreurInfo.nom", 0] },
      prenom: { $arrayElemAt: ["$livreurInfo.prenom", 0] },
      nombreLivraisons: 1
    }
  },
  { $sort: { nombreLivraisons: -1 } }
]);


// ==========================================================
// REQUÊTE 36
// Afficher la somme totale des taxes perçues
// Notion : $sum
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: null,
      totalTaxes: { $sum: "$taxes" }
    }
  }
]);


// ==========================================================
// REQUÊTE 37
// Afficher le prix minimum, maximum et moyen des plats
// Notion : $min, $max, $avg
// ==========================================================
db.plat.aggregate([
  {
    $group: {
      _id: null,
      prixMinimum: { $min: "$prix" },
      prixMaximum: { $max: "$prix" },
      prixMoyen: { $avg: "$prix" }
    }
  }
]);


// ==========================================================
// REQUÊTE 38
// Afficher le nombre de réservations par client
// Notion : $group + $lookup
// ==========================================================
db.reservation.aggregate([
  {
    $group: {
      _id: "$idClient",
      nombreReservations: { $sum: 1 }
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
  {
    $project: {
      _id: 0,
      nom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      prenom: { $arrayElemAt: ["$clientInfo.prenom", 0] },
      nombreReservations: 1
    }
  }
]);


// ==========================================================
// REQUÊTE 39
// Afficher les commandes avec détails client + plats
// Notion : $lookup + $unwind
// ==========================================================
db.commande.aggregate([
  {
    $lookup: {
      from: "client",
      localField: "idClient",
      foreignField: "_id",
      as: "clientInfo"
    }
  },
  { $unwind: "$lignesCommande" },
  {
    $project: {
      _id: 1,
      type: 1,
      statutCommande: 1,
      clientNom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      clientPrenom: { $arrayElemAt: ["$clientInfo.prenom", 0] },
      plat: "$lignesCommande.nomPlat",
      quantite: "$lignesCommande.quantite",
      prixUnitaire: "$lignesCommande.prixUnitaire"
    }
  }
]);


// ==========================================================
// REQUÊTE 40
// Top 5 des meilleurs clients par dépense
// Notion : aggregate complet
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: "$idClient",
      montantTotalDepense: { $sum: "$montantTotal" }
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
  {
    $project: {
      _id: 0,
      nom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      prenom: { $arrayElemAt: ["$clientInfo.prenom", 0] },
      montantTotalDepense: 1
    }
  },
  { $sort: { montantTotalDepense: -1 } },
  { $limit: 5 }
]);


// ==========================================================
// REQUÊTE 41
// Afficher le nombre de commandes par statut
// Notion : $group
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: "$statutCommande",
      nombre: { $sum: 1 }
    }
  },
  { $sort: { nombre: -1 } }
]);


// ==========================================================
// REQUÊTE 42
// Afficher les succursales et leur groupe restaurant
// Notion : $lookup
// ==========================================================
db.succursale.aggregate([
  {
    $lookup: {
      from: "groupeRestaurant",
      localField: "idGroupe",
      foreignField: "_id",
      as: "groupeInfo"
    }
  },
  {
    $project: {
      _id: 0,
      nomSuccursale: 1,
      ville: "$adresse.ville",
      groupe: { $arrayElemAt: ["$groupeInfo.nomGroupe", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 43
// Afficher les tables avec leur succursale
// Notion : $lookup
// ==========================================================
db.table.aggregate([
  {
    $lookup: {
      from: "succursale",
      localField: "idSuccursale",
      foreignField: "_id",
      as: "succursaleInfo"
    }
  },
  {
    $project: {
      _id: 0,
      numeroTable: 1,
      capacite: 1,
      zone: 1,
      statutTable: 1,
      succursale: { $arrayElemAt: ["$succursaleInfo.nomSuccursale", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 44
// Afficher les réservations avec nom du client et numéro de table
// Notion : double $lookup
// ==========================================================
db.reservation.aggregate([
  {
    $lookup: {
      from: "client",
      localField: "idClient",
      foreignField: "_id",
      as: "clientInfo"
    }
  },
  {
    $lookup: {
      from: "table",
      localField: "idTable",
      foreignField: "_id",
      as: "tableInfo"
    }
  },
  {
    $project: {
      _id: 0,
      dateReservation: 1,
      heure: 1,
      nombrePersonnes: 1,
      statutReservation: 1,
      clientNom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      clientPrenom: { $arrayElemAt: ["$clientInfo.prenom", 0] },
      numeroTable: { $arrayElemAt: ["$tableInfo.numeroTable", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 45
// Afficher le nombre d'ingrédients par succursale
// Notion : $group + $lookup
// ==========================================================
db.ingredient.aggregate([
  {
    $group: {
      _id: "$idSuccursale",
      nombreIngredients: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "succursale",
      localField: "_id",
      foreignField: "_id",
      as: "succursaleInfo"
    }
  },
  {
    $project: {
      _id: 0,
      succursale: { $arrayElemAt: ["$succursaleInfo.nomSuccursale", 0] },
      nombreIngredients: 1
    }
  }
]);


// ==========================================================
// REQUÊTE 46
// Rechercher les commandes d'un client précis
// Notion : findOne + find
// ==========================================================
var clientCible = db.client.findOne({ email: "ista@mail.com" });

db.commande.find(
  { idClient: clientCible._id },
  { _id: 1, type: 1, dateCommande: 1, statutCommande: 1, montantTotal: 1 }
).sort({ dateCommande: -1 });


// ==========================================================
// REQUÊTE 47
// Calculer le chiffre d'affaires par succursale
// Notion : $group + $lookup
// ==========================================================
db.commande.aggregate([
  {
    $group: {
      _id: "$idSuccursale",
      chiffreAffaires: { $sum: "$montantTotal" },
      nombreCommandes: { $sum: 1 }
    }
  },
  {
    $lookup: {
      from: "succursale",
      localField: "_id",
      foreignField: "_id",
      as: "succursaleInfo"
    }
  },
  {
    $project: {
      _id: 0,
      succursale: { $arrayElemAt: ["$succursaleInfo.nomSuccursale", 0] },
      chiffreAffaires: 1,
      nombreCommandes: 1
    }
  },
  { $sort: { chiffreAffaires: -1 } }
]);


// ==========================================================
// REQUÊTE 48
// Afficher les commandes ayant une promotion
// Notion : filtre sur référence
// ==========================================================
db.commande.find(
  { idPromotion: { $exists: true, $ne: null } },
  { _id: 1, type: 1, idPromotion: 1, montantPromo: 1, montantTotal: 1 }
);


// ==========================================================
// REQUÊTE 49
// Joindre les commandes avec les promotions
// Notion : $lookup
// ==========================================================
db.commande.aggregate([
  {
    $lookup: {
      from: "promotion",
      localField: "idPromotion",
      foreignField: "_id",
      as: "promoInfo"
    }
  },
  {
    $project: {
      _id: 1,
      type: 1,
      montantSousTotal: 1,
      montantPromo: 1,
      montantTotal: 1,
      codePromo: { $arrayElemAt: ["$promoInfo.codePromo", 0] },
      descriptionPromo: { $arrayElemAt: ["$promoInfo.description", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 50
// Afficher les employés avec leur succursale
// Notion : $lookup
// ==========================================================
db.employe.aggregate([
  {
    $lookup: {
      from: "succursale",
      localField: "idSuccursale",
      foreignField: "_id",
      as: "succursaleInfo"
    }
  },
  {
    $project: {
      _id: 0,
      nom: 1,
      prenom: 1,
      poste: 1,
      salaire: 1,
      succursale: { $arrayElemAt: ["$succursaleInfo.nomSuccursale", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 51
// Afficher tous les commentaires
// Notion : find simple
// ==========================================================
db.commentaires.find();


// ==========================================================
// REQUÊTE 52
// Afficher les commentaires avec note >= 4
// Notion : filtre
// ==========================================================
db.commentaires.find(
  { note: { $gte: 4 } },
  { _id: 0, idClient: 1, idCommande: 1, idLivraison: 1, note: 1, contenu: 1 }
);


// ==========================================================
// REQUÊTE 53
// Trier les commentaires par note décroissante
// Notion : sort
// ==========================================================
db.commentaires.find(
  {},
  { _id: 0, note: 1, contenu: 1 }
).sort({ note: -1 });


// ==========================================================
// REQUÊTE 54
// Mettre à jour la note d'un commentaire
// Notion : updateOne
// ==========================================================
db.commentaires.updateOne(
  { _id: com1 },
  { $set: { note: 4 } }
);


// ==========================================================
// REQUÊTE 55
// Compter le nombre total de commentaires
// Notion : countDocuments
// ==========================================================
db.commentaires.countDocuments();


// ==========================================================
// REQUÊTE 56
// Joindre les commentaires avec les clients
// Notion : $lookup
// ==========================================================
db.commentaires.aggregate([
  {
    $lookup: {
      from: "client",
      localField: "idClient",
      foreignField: "_id",
      as: "clientInfo"
    }
  },
  {
    $project: {
      _id: 1,
      note: 1,
      contenu: 1,
      clientNom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      clientPrenom: { $arrayElemAt: ["$clientInfo.prenom", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 57
// Joindre les commentaires avec les commandes sur place
// Notion : $lookup
// ==========================================================
db.commentaires.aggregate([
  {
    $lookup: {
      from: "commande",
      localField: "idCommande",
      foreignField: "_id",
      as: "commandeInfo"
    }
  },
  {
    $project: {
      _id: 1,
      note: 1,
      contenu: 1,
      typeCommande: { $arrayElemAt: ["$commandeInfo.type", 0] },
      statutCommande: { $arrayElemAt: ["$commandeInfo.statutCommande", 0] },
      montantTotal: { $arrayElemAt: ["$commandeInfo.montantTotal", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 58
// Joindre les commentaires avec les livraisons
// Notion : $lookup
// ==========================================================
db.commentaires.aggregate([
  {
    $lookup: {
      from: "livraison",
      localField: "idLivraison",
      foreignField: "_id",
      as: "livraisonInfo"
    }
  },
  {
    $project: {
      _id: 1,
      note: 1,
      contenu: 1,
      statutLivraison: { $arrayElemAt: ["$livraisonInfo.statutLivraison", 0] },
      heureDepart: { $arrayElemAt: ["$livraisonInfo.heureDepart", 0] },
      heureLivraison: { $arrayElemAt: ["$livraisonInfo.heureLivraison", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 59
// Afficher la note moyenne des commentaires
// Notion : $avg
// ==========================================================
db.commentaires.aggregate([
  {
    $group: {
      _id: null,
      noteMoyenne: { $avg: "$note" }
    }
  }
]);


// ==========================================================
// REQUÊTE 60
// Afficher le nombre de commentaires par client
// Notion : $group + $lookup
// ==========================================================
db.commentaires.aggregate([
  {
    $group: {
      _id: "$idClient",
      nombreCommentaires: { $sum: 1 }
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
  {
    $project: {
      _id: 0,
      nom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      prenom: { $arrayElemAt: ["$clientInfo.prenom", 0] },
      nombreCommentaires: 1
    }
  },
  { $sort: { nombreCommentaires: -1 } }
]);


// ==========================================================
// REQUÊTE 61
// Afficher la note moyenne des commentaires par client
// Notion : $group + $lookup + $avg
// ==========================================================
db.commentaires.aggregate([
  {
    $group: {
      _id: "$idClient",
      noteMoyenne: { $avg: "$note" },
      nombreCommentaires: { $sum: 1 }
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
  {
    $project: {
      _id: 0,
      nom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      prenom: { $arrayElemAt: ["$clientInfo.prenom", 0] },
      noteMoyenne: 1,
      nombreCommentaires: 1
    }
  },
  { $sort: { noteMoyenne: -1 } }
]);


// ==========================================================
// REQUÊTE 62
// Afficher les commentaires avec client + commande + livraison
// Notion : triple $lookup
// ==========================================================
db.commentaires.aggregate([
  {
    $lookup: {
      from: "client",
      localField: "idClient",
      foreignField: "_id",
      as: "clientInfo"
    }
  },
  {
    $lookup: {
      from: "commande",
      localField: "idCommande",
      foreignField: "_id",
      as: "commandeInfo"
    }
  },
  {
    $lookup: {
      from: "livraison",
      localField: "idLivraison",
      foreignField: "_id",
      as: "livraisonInfo"
    }
  },
  {
    $project: {
      _id: 1,
      note: 1,
      contenu: 1,
      clientNom: { $arrayElemAt: ["$clientInfo.nom", 0] },
      clientPrenom: { $arrayElemAt: ["$clientInfo.prenom", 0] },
      typeCommande: { $arrayElemAt: ["$commandeInfo.type", 0] },
      montantCommande: { $arrayElemAt: ["$commandeInfo.montantTotal", 0] },
      statutLivraison: { $arrayElemAt: ["$livraisonInfo.statutLivraison", 0] }
    }
  }
]);


// ==========================================================
// REQUÊTE 63
// Afficher les commentaires liés aux commandes sur place uniquement
// Notion : lookup + match
// ==========================================================
db.commentaires.aggregate([
  {
    $lookup: {
      from: "commande",
      localField: "idCommande",
      foreignField: "_id",
      as: "commandeInfo"
    }
  },
  { $unwind: "$commandeInfo" },
  {
    $match: {
      "commandeInfo.type": "sur_place"
    }
  },
  {
    $project: {
      _id: 1,
      note: 1,
      contenu: 1,
      typeCommande: "$commandeInfo.type",
      statutCommande: "$commandeInfo.statutCommande"
    }
  }
]);


// ==========================================================
// REQUÊTE 64
// Afficher les commentaires associés à des livraisons livrées
// Notion : lookup + match
// ==========================================================
db.commentaires.aggregate([
  {
    $lookup: {
      from: "livraison",
      localField: "idLivraison",
      foreignField: "_id",
      as: "livraisonInfo"
    }
  },
  { $unwind: "$livraisonInfo" },
  {
    $match: {
      "livraisonInfo.statutLivraison": "livrée"
    }
  },
  {
    $project: {
      _id: 1,
      note: 1,
      contenu: 1,
      statutLivraison: "$livraisonInfo.statutLivraison"
    }
  }
]);


// ==========================================================
// REQUÊTE 65
// Afficher la répartition des commentaires par note
// Notion : group
// ==========================================================
db.commentaires.aggregate([
  {
    $group: {
      _id: "$note",
      nombreCommentaires: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);


// ==========================================================
// FIN DU SCRIPT
// ==========================================================