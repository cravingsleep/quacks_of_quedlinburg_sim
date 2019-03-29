import Cauldron from '../cauldron';

/**
 * What values a token could be.
 */
type TokenValue = 1 | 2 | 3 | 4;

/**
 * Base class for all tokens.
 */
abstract class Token {
    /**
     * The name of the token.
     */
    public readonly name: string;

    /**
     * The value on the token
     */
    public readonly value: TokenValue;

    constructor(name: string, value: TokenValue) {
        this.name = name;
        this.value = value;
    }

    public spacesForward(cauldron: Cauldron): number {
        return this.value;
    }
}

export { Token, TokenValue };
