const path = require("path");

// Update the path to use .env.test for the test environment variables
require("dotenv").config({ path: path.join(__dirname, "..", ".env.test") });

const knex = require("../src/db/connection");

// Force release any existing migration locks
knex.migrate.forceFreeMigrationsLock()
  // Rollback all migrations to clean the database
  .then(() => knex.migrate.rollback(null, true))
  // Run the latest migrations to re-create the schema
  .then(() => knex.migrate.latest())
  // Re-seed the database with initial data
  .then(() => knex.seed.run())
  .then(() => {
    console.log("Dropped all tables, re-run migrations, and re-seeded the database");
    return knex.destroy();
  })
  .catch((error) => {
    console.error("Failed to reset the test database", error);
    return knex.destroy();
  });
