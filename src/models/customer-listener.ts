import { ChangeStreamInsertDocument, Db } from 'mongodb'
import { EModels } from './models.enum'
import { anonimyzingCustomer } from '../generators/anonimiser-customer'
import { ICustomer } from './customer.interface'

export const customerListener = (db: Db) => {
    const customers = db.collection(EModels.CUSTOMERS)
    const changeStream = customers
        .watch([
            {
                $match: { operationType: 'insert' },
            },
        ])
        .on('change', (data: ChangeStreamInsertDocument) => {
            db.collection(EModels.CUSTOMERS_ANONYMISED).insertOne({
                ...anonimyzingCustomer(data.fullDocument as ICustomer),
            })
        })
}
