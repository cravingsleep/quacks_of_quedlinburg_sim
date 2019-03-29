import Cauldron from '../cauldron';
import { Token } from './token';

class CherryBomb extends Token {
    public static readonly cherryBombName: string = 'CherryBomb';

    constructor(value: 1 | 2 | 3) {
        super(CherryBomb.cherryBombName, value);
    }

    public spacesForward(cauldron: Cauldron): number {
        throw new Error('Method not implemented.');
    }
}

export default CherryBomb;
