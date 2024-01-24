import db from '../models/db'
import { EModels } from '../models/models.enum'
const resolvers = {
    Query: {
        customers: async () => {
            const cursor = db.getDb().collection(EModels.CUSTOMERS).find({})
            return await cursor.toArray()
        },
        anonimyzedCustomers: async () => {
            const cursor = db
                .getDb()
                .collection(EModels.CUSTOMERS_ANONYMISED)
                .find({})
            return await cursor.toArray()
        },
    },
}

export default resolvers
