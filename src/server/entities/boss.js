const bosses = require('./../bosslist/bosses');

// Name - Random of list name
// MaxLife - 1000 * number of players
// Life - Initialize with maxlife and life always <= maxlife
// Attack - 150
// Heal - 30% of life

class Boss {
    constructor(currentPlayers){
        this.name = Math.floor(Math.random() * bosses.length) + 1;
        this.maxLife = 1000 * currentPlayers;
        this.life = this.maxLife;
        this.attack = 150;
        this.percentOfHeal = 0.30;
        this.alive = true;
    }

    //METHODS
    //TODO AttackPlayer

    takeDamage(attack){
        this.life -= attack;
        if(this.life <= 0) this.alive = false;
    }
    heal(){
        const addLife = (this.life * this.percentOfHeal);
        if(this.life + addLife >= this.maxLife) {
            this.life = this.maxLife;
        }else{
            this.life += addLife;
        }
    }

}

module.exports = Boss; 