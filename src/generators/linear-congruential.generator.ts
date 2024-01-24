export class LinearCongruentialGenerator {
    state: number
    a: number
    c: number
    m: number
    constructor(seed: number, a: number, c: number, m: number) {
        this.state = seed
        this.a = a
        this.c = c
        this.m = m
    }

    nextRandom() {
        this.state = (this.a * this.state + this.c) % this.m
        return this.state / this.m
    }
}
