// =====================================================================
//  Mario Bros dengan OOP (TypeScript) - Versi Sederhana
// =====================================================================

type FormName = "mario" | "super mario" | "fire mario";

// ---------------------------------------------------------------------
//  CLASS MARIO
// ---------------------------------------------------------------------
class Mario {
    hp: number = 1;
    speed: number = 5;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: FormName = "mario";

    moveRight(): void {
        this.positionX += this.speed;
        console.log(`Mario bergerak ke kanan. positionX: ${this.positionX}`);
    }

    moveLeft(): void {
        this.positionX -= this.speed;
        console.log(`Mario bergerak ke kiri. positionX: ${this.positionX}`);
    }

    shootFireball(): void {
        if (this.currentForm === "fire mario") {
            console.log("Mario menembakkan bola api!");
        } else {
            console.log(`${this.currentForm} tidak bisa menembakkan bola api!`);
        }
    }

    takeDamage(): void {
        if (this.invincible) {
            console.log("Mario kebal terhadap serangan!");
            return;
        }

        this.hp -= 1;
        this.currentForm = "mario";
        console.log("Mario terkena serangan! Kembali ke form mario.");

        if (this.hp <= 0) {
            console.log("Mario mati!");
        }
    }

    status(): void {
        console.log(
            `[STATUS] form: ${this.currentForm} | HP: ${this.hp} | ` +
            `posisi: (${this.positionX}, ${this.positionY}) | kebal: ${this.invincible}`
        );
    }
}

// ---------------------------------------------------------------------
//  POWER UP (Inheritance + Polymorphism)
//  Class induk abstract, tiap turunan meng-override use()
// ---------------------------------------------------------------------
abstract class PowerUp {
    abstract use(mario: Mario): void;
}

class SuperMushroom extends PowerUp {
    use(mario: Mario): void {
        mario.hp += 1;
        mario.currentForm = "super mario";
        console.log("Mario berubah menjadi Super Mario! HP + 1");
    }
}

class FireFlower extends PowerUp {
    use(mario: Mario): void {
        mario.hp += 1;
        mario.currentForm = "fire mario";
        console.log("Mario berubah menjadi Fire Mario! HP + 1");
    }
}

class SuperStar extends PowerUp {
    use(mario: Mario): void {
        mario.invincible = true;
        console.log("Mario kebal terhadap serangan!");
    }
}

// ---------------------------------------------------------------------
//  OBJECT / DEMO
// ---------------------------------------------------------------------
const mario = new Mario();
const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();

console.log("=== Awal ===");
mario.status();

console.log("\n=== Bergerak ===");
mario.moveRight();
mario.moveRight();
mario.moveLeft();

console.log("\n=== Ambil Jamur ===");
mushroom.use(mario);
mario.shootFireball();
mario.status();

console.log("\n=== Ambil Bunga ===");
flower.use(mario);
mario.shootFireball();
mario.status();

console.log("\n=== Diserang ===");
mario.takeDamage();
mario.status();

console.log("\n=== Ambil Bintang ===");
star.use(mario);
mario.takeDamage(); // tidak berpengaruh
mario.status();

console.log("\n=== Polymorphism pada PowerUp ===");
const mario2 = new Mario();
const powerUps: PowerUp[] = [new SuperMushroom(), new FireFlower(), new SuperStar()];
for (const p of powerUps) {
    p.use(mario2); // use() yang dipanggil berbeda-beda sesuai class-nya
}
mario2.status();
