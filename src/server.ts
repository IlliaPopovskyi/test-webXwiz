import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import http from 'http'
import express, { Application } from 'express'
import typeDefs from './schema/type-defs'
import resolvers from './schema/resolvers'
import MongoDbClient from './models/db'
import { autoInsertCustomers } from './generators/insert-customers'

const PORT = 4000

const app: Application = express()
const httpServer = http.createServer(app)

const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
})

async function startServer() {
    try {
        await server.start()
        app.use('/graphql', express.json(), expressMiddleware(server))
        console.log('GraphQL is connected!')
    } catch (err) {
        console.log('GraphQL error: ', err)
    }
}
startServer()
httpServer.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`)
    MongoDbClient.init().then(async () => {
        setInterval(() => {
            autoInsertCustomers()
        }, 200)
    })
})
