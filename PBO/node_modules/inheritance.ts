class Hero {
    health: number = 100;
    speed: number = 100;
    magicalDefense: number = 100;
    physicalDefence: number = 100;
    basicAttack: number = 100;

    getInformationHero(): string {
        return `Darahnya ${this.health}, Speed ${this.speed}`;
    }

    getAttacked(damage: number): number{
        this.health = this.health - damage;

        return this.health
    }
}

const hero = new Hero();

console.log(hero.getInformationHero());
console.log(hero.getAttacked(20));