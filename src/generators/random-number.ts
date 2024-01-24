import crypto from 'node:crypto'
export const randomNumber = (min: number, max: number) => {
    return crypto.randomInt(min, max)
}
