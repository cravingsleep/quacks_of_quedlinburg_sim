import Cauldron from './cauldron';
import Mushroom from './tokens/mushroom';

const mushroom = new Mushroom(4);

const cauldron = new Cauldron();

console.log(mushroom.spacesForward(cauldron));
