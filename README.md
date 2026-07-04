# La Table Commune – MongoDB Restaurant Management System

## Overview

**La Table Commune** is a MongoDB-based restaurant management system developed to demonstrate the design, implementation, optimization, and administration of a modern NoSQL database.

The project simulates the operations of a restaurant chain by managing customers, employees, branches, menu items, ingredients, orders, reservations, deliveries, suppliers, and promotional campaigns. It follows industry best practices for document-oriented database design and provides analytical reporting capabilities for business decision-making.

The solution was implemented using **MongoDB Atlas** and demonstrates practical skills in database modeling, indexing, aggregation pipelines, schema validation, security, and performance optimization.

---

## Project Objectives

- Design a scalable NoSQL database for restaurant management.
- Implement a document-oriented data model using MongoDB.
- Optimize query performance through indexing.
- Build analytical reports using aggregation pipelines.
- Validate data integrity with JSON Schema.
- Apply Role-Based Access Control (RBAC) principles.
- Demonstrate backup and recovery strategies.
- Analyze query performance using MongoDB execution plans.

---

## Project Structure

```text
la-table-commune-mongodb/
│
├── docs/
│   ├── LaTableCommune_MongoDB_Technical_Report.pdf
│   └── LaTableCommune_MongoDB_ERD.png
│
├── scripts/
│   ├── 01_import_data.js
│   ├── 02_practice_queries.js
│   ├── 03_create_indexes.js
│   ├── 04_aggregation_queries.js
│   ├── 05_validation_schema.js
│   ├── 06_security_rbac.js
│   ├── 07_views.js
│   ├── 08_backup_restore.md
│   └── 09_performance_tests.js
│
├── README.md
├── LICENSE
└── .gitignore
```

---

## Database Features

The database manages the following business entities:

- Customers
- Employees
- Restaurant Branches
- Menu Categories
- Menu Items
- Ingredients
- Suppliers
- Orders
- Reservations
- Deliveries
- Promotions

---

## Technical Features

### Data Import

The database is automatically populated using a dedicated import script.

- Collection creation
- Sample data generation
- Initial data validation

---

### CRUD Operations

A collection of MongoDB queries demonstrates:

- Document retrieval
- Filtering
- Updates
- Deletions
- Aggregation operations

---

### Indexing

Performance optimization is achieved through indexes on frequently queried fields, including:

- Customer
- Branch
- Order Date
- Order Status
- Reservation Date
- Inventory Stock

---

### Aggregation Pipelines

Business reports include:

- Revenue by Branch
- Monthly Revenue
- Customer Analytics
- Reservation Statistics
- Menu Performance
- Inventory Monitoring
- Branch Performance

---

### Schema Validation

MongoDB JSON Schema validation is implemented to ensure:

- Required fields
- Correct data types
- Business rule enforcement
- Data consistency

---

### Security

The project documents recommended MongoDB security practices:

- Role-Based Access Control (RBAC)
- Least Privilege Principle
- Secure authentication
- Atlas security recommendations

---

### Reporting Views

MongoDB Views provide reusable reporting layers for:

- Sales Dashboard
- Customer Summary
- Branch Performance
- Reservation Overview

---

### Backup and Recovery

Documentation includes:

- Database backup using `mongodump`
- Database restoration using `mongorestore`
- Recommended backup strategy
- Disaster recovery recommendations

---

### Performance Optimization

Query performance was evaluated using MongoDB's `explain("executionStats")`.

The optimization process followed four steps:

1. Analyze execution plans.
2. Identify collection scans (COLLSCAN).
3. Create targeted indexes.
4. Validate improvements through index scans (IXSCAN).

Examples of optimized queries include:

| Query | Before | After |
|-------|--------|-------|
| Orders by Status | COLLSCAN | IXSCAN |
| Orders by Date | COLLSCAN | IXSCAN |
| Low Stock Ingredients | COLLSCAN | IXSCAN |

---

## Technologies

- MongoDB
- MongoDB Atlas
- MongoDB Compass
- JavaScript
- BSON
- JSON Schema

---

## Documentation

Additional project documentation is available in the **docs/** directory.

- Technical Report
- Entity-Relationship Diagram (ERD)

---

## Learning Outcomes

This project demonstrates practical experience in:

- NoSQL Database Design
- MongoDB Administration
- Query Optimization
- Data Validation
- Aggregation Pipelines
- Performance Analysis
- Database Security
- Business Reporting

---

## Future Extensions

### Business Intelligence

- Interactive Power BI dashboards
- Executive KPI reporting
- Operational dashboards

### Advanced Analytics

- Customer behaviour analysis
- Sales forecasting
- Inventory optimisation
- Promotion effectiveness

### Artificial Intelligence

- Recommendation system
- Customer segmentation
- Demand forecasting

### Cloud Applications

- AWS serverless applications connected to MongoDB Atlas
- REST APIs
- Automated ETL pipelines
- Data engineering workflows

---

## Author

**Ista Kpovenon**

Applied Data Science Student

Project Management | Data Analytics | Data Science | Artificial Intelligence

---

## License

This project is released under the MIT License.