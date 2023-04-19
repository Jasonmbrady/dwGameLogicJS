class Monster {
    constructor(name, strength, agility, hp, sleepResist, stopSpellResist, hurtResist, dodge, experience, gold, spellList = []) {
        this.name = name;
        this.strength = strength;
        this.agility = agility;
        this.hp = hp;
        this.sleepResist = sleepResist;
        this.stopSpellResist = stopSpellResist;
        this.hurtResist = hurtResist;
        this.dodge = dodge;
        this.experience = experience;
        this.gold = gold;
        this.items = items;
        this.spellList = spellList;
    }
}

const Monsters = {
    slime: new Monster("Slime", 5, 3, 3, 0, 15, 0, 1, 1, 1),
    redSlime:new Monster("Red Slime", 7, 3, 4, 0, 15, 0, 1, 1, 2),
    drakee:new Monster("Drakee", 9, 6, 6, 0, 15, 0, 1, 2, 2),
    ghost: new Monster("Ghost", 11, 8, 7, 0, 15, 0, 4, 3, 4),
    magician: new Monster("Magician", 11, 12, 13, 0, 0, 0, 1, 4, 11, ["HURT"]), //50% chance to cast HURT
    magidrakee: new Monster("Magidrakee", 14, 14, 15, 0, 0, 0, 1, 5, 11, ["HURT"]), // 50% chance to cast HURT
    scorpion: new Monster("Scorpion", 18, 16, 20, 0, 15, 0, 1, 6, 15),
    druin: new Monster("Druin", 20, 18, 22, 0, 15, 0, 2, 7, 15),
    poltergeist: new Monster("Poltergeist", 18, 20, 23, 0, 0, 0, 6, 8, 17, ["HURT"]), // 75% chance to cast HURT
    droll: new Monster("Droll", 24, 24, 25, 0, 14, 0, 2, 10, 24), 
    drakeema: new Monster("Drakeema", 26, 26, 27, 0, 14, 0, 2, 11, 24["HEAL", "HURT"]), // 25% chance to cast HEAL if HP < 25% of max HP, 50% chance to cast HURT
    skeleton: new Monster("Skeleton", 28, 22, 30, 0, 15, 0, 4, 11, 29),
}

module.exports = Monsters;