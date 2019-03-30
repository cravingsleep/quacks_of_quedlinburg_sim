import { Colour, Player } from './player';
import rounds from './rounds';
import { range } from './util/fills';

// set up the game
const redPlayer = new Player(Colour.RED);
const greenPlayer = new Player(Colour.GREEN);
const yellowPlayer = new Player(Colour.YELLOW);
const bluePlayer = new Player(Colour.BLUE);

const players = [redPlayer, greenPlayer, yellowPlayer, bluePlayer];

console.log(redPlayer.playRound());
