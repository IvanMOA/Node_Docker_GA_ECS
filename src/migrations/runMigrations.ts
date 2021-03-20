import knex from '../db';

const runMigrations = async () => {
  try {
    await knex.raw(` 
    CREATE TABLE IF NOT EXISTS restaurants(
        id SERIAL PRIMARY KEY,
        restaurant_name VARCHAR(50),
        stars Int
    )
    `);
    console.log('Migrations ran');
  } catch (error) {
    console.log('Could not run migrations\n', error);
  }
  return;
};
runMigrations().then(() => {knex.destroy()});
