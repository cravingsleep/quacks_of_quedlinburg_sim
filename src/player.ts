import Cauldron from './cauldron';
import CherryBomb from './tokens/cherryBomb';
import Pumpkin from './tokens/pumpkin';
import Spider from './tokens/spider';
import { Token } from './tokens/token';

/**
 * The different types of colour a player can be.
 */
const enum Colour {
    RED,
    GREEN,
    BLUE,
    YELLOW
}

class Player {
    /**
     * A players starting bag.
     */
    private static readonly STARTING_BAG: Token[] = [
        new Spider(1),
        new Pumpkin(),
        new CherryBomb(3),
        new CherryBomb(2), new CherryBomb(2),
        new CherryBomb(1), new CherryBomb(1), new CherryBomb(1), new CherryBomb(1)
    ];

    /**
     * The colour of the player board.
     */
    public readonly colour: Colour;

    /**
     * The players bag.
     */
    public readonly bag: Token[];

    /**
     * The players cauldron.
     */
    public readonly cauldron: Cauldron;

    /**
     * The amount of rubies the player holds.
     */
    public readonly rubies: number;

    constructor(colour: Colour, bag: Token[] = Player.STARTING_BAG,
                cauldron: Cauldron = new Cauldron(), rubies: number = 0) {
        this.colour = colour;
        this.bag = bag;
        this.cauldron = cauldron;
        this.rubies = rubies;
    }

    /**
     * Adds a token to the bag.
     */
    public addTokenToBag(token: Token): Player {
        const newBag = this.bag.concat(token);

        return new Player(this.colour, newBag, this.cauldron, this.rubies);
    }

    /**
     * Adds rubies to the player.
     */
    public addRubies(rubies: number): Player {
        return new Player(this.colour, this.bag, this.cauldron, this.rubies + rubies);
    }
}

export { Colour, Player };
