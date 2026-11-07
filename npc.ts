class Npc{
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
}

const harpy = new Npc("Goblin", 50, 10, 20, 90, "walk")

harpy.walking();
harpy.attacking();
harpy.sprint();
harpy.ultimateSkill();

console.log(harpy);