import express from 'express';
import knex from './db';

const app = express();

const RESTAURANTS_TABLE = 'restaurants'

app.get('/', async (req, res) => {
  await knex(RESTAURANTS_TABLE).insert({ restaurant_name: 'RestauranPro'})
  const results = await knex(RESTAURANTS_TABLE).select('*')
  res.send(results)
});

app.post('/', (res, req) => {
  console.log('Posting to database');
});

const port = process.env.PORT || 8000

const listening = () => console.log(`Listening on port ${port}`);

app.listen(port, listening);
