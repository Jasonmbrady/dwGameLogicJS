const player = require('./Player.js');
const weapons = require('./Weapon.js');
const armor = require('./Armor.js');
const shields = require('./Shield.js');

function rngRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

player.equipWeapon(weapons.club);
player.equipArmor(armor.clothes);
console.log(player.weapon.name);


