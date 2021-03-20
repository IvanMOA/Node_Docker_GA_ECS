import Knex from 'knex'
import dotenv from 'dotenv'
dotenv.config()

const knex = Knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
        database: 'strapidb'
    }
})

export default knex