import { Colour, Player } from './player';
import { range } from './util/fills';

// set up the game
const redPlayer = new Player(Colour.RED);
const greenPlayer = new Player(Colour.GREEN);
const yellowPlayer = new Player(Colour.YELLOW);
const bluePlayer = new Player(Colour.BLUE);

/**
 * Amount of rounds in the game.
 */
const AMOUNT_OF_ROUNDS = 9;
