import { Token, TokenType } from './token';

class Mandrake extends Token {
    constructor(value: 1 | 2| 3 | 4) {
        super(TokenType.Mandrake, value);
    }
}

export default Mandrake;
