class Knight {
    name: string = "Arthur";
    hp: number = 100;
    attack: number = 20;
    speed: number = 10;

    slash(): void {
        console.log("Arthur melakukan serangan pedang!");
    }

    run() {
        console.log("Arthur sedang berlari");
    }

    takeDamage() {
        this.hp -= 15;
        console.log("Arthur terkena serangan!");
    } 
}

const knight = new Knight();

knight.slash();
console.log(knight.hp);