import GreetingBuilder from '../src/GreetingBuilder'
import expect from 'expect'

describe('GreetingBuilder tests', () => {

    const validName = 'Juan';
    const invalidName = 'Jorge';

    it('should greet a person', () => {
        const expectedGreeting = `Hello ${validName}!`;

        const greetingBuilder = new GreetingBuilder(validName);
        const greeting = greetingBuilder.build();

        expect(greeting).toBe(expectedGreeting);
    });

    it('should throw InvalidNameException if person name is "Jorge"', () => {
        const greetingBuilder = new GreetingBuilder(invalidName);
        expect(greetingBuilder.build.bind(greetingBuilder)).toThrow('InvalidNameException');
    });
});
