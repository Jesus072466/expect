export default class GreetingBuilder {
    private readonly name: String

    public constructor(name:string) {
        this.name = name
    }

    public build(): string {
        this.throwIfNameIsInvalid();
        return `Hello ${this.name}!`
    }

    private throwIfNameIsInvalid(): void {
        if(this.name === 'Jorge') {
            throw new Error('InvalidNameException')
        }
    }
}