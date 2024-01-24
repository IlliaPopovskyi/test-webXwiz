import { Db, MongoClient } from 'mongodb'
import { config } from '../config'
import { customerListener } from './customer-listener'

export class MongoDbClient {
    private static instance: MongoDbClient
    private db: Db | null = null
    constructor() {}

    static getInstance(): MongoDbClient {
        if (!MongoDbClient.instance) {
            MongoDbClient.instance = new MongoDbClient()
        }

        return MongoDbClient.instance
    }

    async init(): Promise<void> {
        try {
            this.db = (await new MongoClient(config.dbUri).connect()).db(
                'webxwiztest'
            )
            customerListener(this.db)
            console.log('MongoDb is connected!')
        } catch (err) {
            console.log('MongoDb error: ', err)
        }
    }

    getDb(): Db {
        if (!this.db) {
            throw new Error(
                'MongoDb client not initialized. Use method <init> for initializing.'
            )
        }
        return this.db
    }
}

export default MongoDbClient.getInstance()
