class Enemy{
    HP: number;
    attack: number;
    defence: number;
    speed: number;
    dead: boolean;

    constructor(
        HP: number,
        attack: number,
        defence: number,
        speed: number,
        dead: boolean,

    ){
        this.HP = HP;
        this.attack = attack;
        this.defence = defence;
        this.speed = speed;
        this.dead = dead;
    }

attacking(): number {
    return this.attack;
}

walking(): number {
    return this.speed;
}

isDead(): boolean {
    return (this.dead = true);
}

}