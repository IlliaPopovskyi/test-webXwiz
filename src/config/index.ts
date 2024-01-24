import { IConfig } from './interface'

require('dotenv').config()

export const config: IConfig = {
    dbUri: process.env.DB_URI as string,
}
