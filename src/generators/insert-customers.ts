import { generateCustomer } from './customer'
import { MongoDbClient } from '../models/db'
import { EModels } from '../models/models.enum'
import { randomNumber } from './random-number'

export async function autoInsertCustomers() {
    const count = randomNumber(1, 10)
    const generatedCustomers = []
    for (let i = 0; i < count; i++) {
        generatedCustomers.push(generateCustomer())
    }
    const db = MongoDbClient.getInstance().getDb()
    const customers = db.collection(EModels.CUSTOMERS)
    await customers.insertMany(generatedCustomers)
}
