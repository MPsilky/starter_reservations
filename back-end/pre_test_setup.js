require('dotenv').config({ path: '../.env.test' });  
const knex = require('knex');
const knexfile = require('./knexfile.js');

const db = knex(knexfile.test);

async function resetTestDB() {
  try {
    // Drop the 'tables' table
    await db.raw('DROP TABLE IF EXISTS public."tables" CASCADE;');
    // Run migrations and seeds
    await db.migrate.latest();
    await db.seed.run();
    console.log('Test database has been reset');
  } catch (err) {
    console.error('Error resetting test database:', err);
  } finally {
    // Destroy the db instance to close connections
    await db.destroy();
  }
}

// Run the reset function
resetTestDB();
