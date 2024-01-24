import { gql } from 'apollo-server'

const typeDefs = gql`
    type Address {
        line1: String
        line2: String
        postcode: String
        city: String
        state: String
        country: String
    }

    type Customer {
        _id: ID!
        firstName: String
        lastName: String
        email: String
        address: Address
        createdAt: String
    }

    type Query {
        customers: [Customer!]!
        anonimyzedCustomers: [Customer!]!
    }
`

export default typeDefs
