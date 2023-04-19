const Player = {
    weapon: {name: "none", attack: 0, cost: 0, description: "Your bare hands"},
    armor: {name: "none", defense: 0, cost: 0, description: "You are not wearing any armor"},
    shield: {name: "none", defense: 0, cost: 0, description: "You are not carrying a shield"},
    strength: 3,
    agility: 3,
    maxHp: 13,
    hp: 13,
    maxMp: 0,
    mp: 0,
    spellsKnown: [],
    equipWeapon: function(weapon) {
        this.weapon = weapon;
    },
    equipArmor: function(armor) {
        this.armor = armor;
    },
    equipShield: function(shield) {
        this.shield = shield;
    },
    learnSpell: function(spell) {
        this.spellsKnown.push(spell);
    }
}

export default Player;