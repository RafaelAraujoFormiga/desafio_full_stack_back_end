import "reflect-metadata"
import { DataSource } from "typeorm"
import "dotenv/config"


const host = process.env.NODE_ENV === "dockerdev" ? "postgres" : "localhost";

const AppDataSource = new DataSource(
    {
        type: "postgres",
        host,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        logging: true,
        synchronize: false,
        entities: ['src/entities/*.ts'],
        migrations: ['src/migrations/*.ts']
    }
)

export default AppDataSource
