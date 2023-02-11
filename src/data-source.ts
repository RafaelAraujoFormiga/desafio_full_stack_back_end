import "reflect-metadata"
import { DataSource } from "typeorm"
import "dotenv/config"


const AppDataSource = new DataSource(
    {
        type: "postgres",
        url: process.env.DB_URL,
        entities: [`${__dirname}/**/entities/*.{ts,js}`],
        migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
    }
)

export default AppDataSource
