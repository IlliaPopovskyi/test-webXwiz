import { ICustomer } from '../models/customer.interface'
import { LinearCongruentialGenerator } from './linear-congruential.generator'

export const anonimyzingCustomer = (data: ICustomer): ICustomer => {
    const [email, domain] = data.email.split('@')
    const subnumber =
        data.address.city.length +
        data.address.state.length +
        data.address.country.length
    return {
        firstName: generateAnonimizedString(data.firstName, subnumber + 1),
        lastName: generateAnonimizedString(data.lastName, subnumber + 2),
        email: generateAnonimizedString(email, subnumber + 3) + '@' + domain,
        address: {
            line1: generateAnonimizedString(data.address.line1, subnumber + 4),
            line2: generateAnonimizedString(data.address.line2, subnumber + 5),
            postcode: generateAnonimizedString(
                data.address.postcode,
                subnumber + 6
            ),
            city: data.address.city,
            state: data.address.state,
            country: data.address.country,
        },
        createdAt: data.createdAt,
    }
}

function generateAnonimizedString(input: string, subnumber: number) {
    const symbols =
        'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    const seed = new Date().getTime() * input.length * subnumber
    const a = 1664525
    const c = 1013904223
    const m = Math.pow(2, 32)

    const lcg = new LinearCongruentialGenerator(seed, a, c, m)
    let str = ''

    for (let i = 0; i < 8; i++) {
        const index =
            Math.floor(lcg.nextRandom() * 1000000000000) % symbols.length
        str += symbols[index]
    }
    return str
}
