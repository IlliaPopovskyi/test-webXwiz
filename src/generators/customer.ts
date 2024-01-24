import { faker } from '@faker-js/faker'
import { ICustomer } from '../models/customer.interface'

export const generateCustomer = (): ICustomer => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        address: {
            line1: faker.location.streetAddress(),
            line2: faker.location.secondaryAddress(),
            postcode: faker.location.zipCode(),
            city: faker.location.city(),
            state: faker.location.state(),
            country: faker.location.country(),
        },
        createdAt: new Date().toISOString(),
    }
}
