# Backup and Restore Guide

## Project

**La Table Commune – MongoDB Restaurant Management System**

---

# Purpose

This document describes the recommended backup and recovery procedures for the **LaTableCommune** MongoDB database.

---

# Prerequisites

* MongoDB Database Tools installed
* MongoDB Atlas cluster
* Valid MongoDB connection string
* Appropriate database permissions

---

# Database Backup

MongoDB provides the `mongodump` utility to create a logical backup of a database.

## Backup Command

```bash
mongodump --uri="mongodb+srv://<username>:<password>@<cluster-url>/LaTableCommune" --out=backup
```

### Parameters

| Parameter | Description                       |
| --------- | --------------------------------- |
| `--uri`   | MongoDB Atlas connection string   |
| `--out`   | Output directory for backup files |

Example output:

```
backup/
└── LaTableCommune/
    ├── client.bson
    ├── commande.bson
    ├── ingredient.bson
    ├── livraison.bson
    ├── plat.bson
    ├── reservation.bson
    └── succursale.bson
```

---

# Database Restore

MongoDB provides the `mongorestore` utility to restore a backup.

## Restore Command

```bash
mongorestore --uri="mongodb+srv://<username>:<password>@<cluster-url>/LaTableCommune" backup/LaTableCommune
```

### Optional Restore

Drop existing collections before restoring.

```bash
mongorestore --drop --uri="mongodb+srv://<username>:<password>@<cluster-url>/LaTableCommune" backup/LaTableCommune
```

---

# Backup Strategy

The following backup strategy is recommended.

| Backup Type        | Frequency | Retention |
| ------------------ | --------- | --------- |
| Full Backup        | Weekly    | 3 months  |
| Incremental Backup | Daily     | 30 days   |
| Monthly Archive    | Monthly   | 1 year    |

---

# Recovery Procedure

In the event of data loss:

1. Identify the most recent valid backup.
2. Stop application writes if necessary.
3. Restore the backup using `mongorestore`.
4. Verify data integrity.
5. Validate indexes and collections.
6. Resume normal application operations.

---

# Best Practices

* Automate backups using scheduled jobs.
* Store backups in a secure location.
* Encrypt backup files.
* Test restoration procedures regularly.
* Maintain multiple backup copies.
* Document every restore operation.
* Monitor backup success and failures.

---

# Cloud Backup

When using MongoDB Atlas:

* Enable automated cloud backups.
* Configure an appropriate backup retention policy.
* Monitor backup status through the Atlas dashboard.
* Periodically perform restore tests.

---

# Disaster Recovery Recommendations

To minimize business interruption:

* Maintain geographically redundant backups.
* Define Recovery Point Objective (RPO).
* Define Recovery Time Objective (RTO).
* Regularly test disaster recovery procedures.
* Document emergency contacts and recovery steps.

---

# Conclusion

A reliable backup and recovery strategy is essential for ensuring business continuity and protecting critical restaurant management data. Regular backups, periodic restore testing, and secure storage significantly reduce operational risks.
