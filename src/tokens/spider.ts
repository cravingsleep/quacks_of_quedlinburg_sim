import { Token, TokenValue } from './token';

class Spider extends Token {
    private static readonly SpiderName: string = 'Spider';

    constructor(value: TokenValue) {
        super(Spider.SpiderName, value);
    }
}

export default Spider;
