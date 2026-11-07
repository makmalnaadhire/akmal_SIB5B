class Npc1{
    name: string;
    health: number;
    speed: number;
    defence: number;
    attack: number;
    npcType: "fly" | "walk";

    constructor(
        name: string,
        health: number,
        speed: number,
        defence: number,
        attack: number,
        npcType: "fly" | "walk",
    ){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.defence = defence;
        this.attack = attack;
        this.npcType = npcType;

    }

    walking(): void{
        this.speed +=2
        console.log(`${this.name} is walking`);
    }
    
    attacking(): void {
        this.attack +=2
        console.log(`${this.name} is attacking`);
    }

    sprint(): void {
        this.speed +=4
        console.log(`${this.name} is sprinting`);
    }

    ultimateSkill(): void {
        this.attack +=10
        console.log(`${this.name} uses Ultimate Skill`);
    }

    isflying(): void {
        if (this.npcType === "fly") {
            this.speed +=10;
            this.attack +=10;
            return console.log(``)
        } else {

        }

    }
}