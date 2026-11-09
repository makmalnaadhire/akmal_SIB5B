// =====================================================================
//  SOAL: Mario Bros dengan OOP (TypeScript)
// =====================================================================
//  Mario memiliki atribut: HP, speed, positionX, positionY, invincible,
//  currentForm. Mario dapat berubah menjadi 3 form: 'mario',
//  'super mario', dan 'fire mario'.
//
//  Default: HP = 1, speed = 5, currentForm = 'mario', invincible = false,
//           positionX = 0, positionY = 0
//
//  1. SuperMushroom (Jamur): Mario menjadi Super Mario, HP + 1.
//  2. FireFlower (Bunga): Mario menjadi Fire Mario, HP + 1,
//     dan dapat menembakkan bola api.
//  3. SuperStar (Bintang): Mario kebal terhadap serangan.
//  4. Diserang: HP - 1 dan kembali ke form 'mario'.
//     Jika sedang kebal, serangan tidak berpengaruh.
//  5. Bergerak ke kanan: positionX + speed.
//  6. Bergerak ke kiri: positionX - speed.
//
//  Buat class, attribute, method, dan object.
//  Terapkan inheritance dan polymorphism.
// =====================================================================

// Kerjakan Quiznya Disini

//Attributes
class Mario {
    hp: number = 1;
    speed: number = 1;
    positionX: number = 0;
    positionY: number = 0;
    invincible: boolean = false;
    currentForm: string = "mario";

//Methods
    attack(): void {
        console.log("Mario menyerang!");
    }

    jump(): void {
        console.log("Mario melompat!");
    }

    moveRight() {
        this.positionX += this.speed;
        console.log("Mario bergerak!");
    }

    moveLeft() {
        this.positionX -= this.speed;
        console.log("Mario bergerak!");
    }

    takeDamage() {
        if (this.invincible) {
            console.log("Mario kebal terhadap serangan!");
            return;
        }

        this.hp -= 1;
        this.currentForm = "mario";

        console.log("Mario terkena serangan!");

        if (this.hp <= 0) {
            console.log("Mario mati!");
        }
    }

    shootFireball() {
        if (this.currentForm === "fire mario") {
            console.log("Mario menembakkan bola api!");
        } else {
            console.log("Mario tidak bisa menembakkan bola api!");
        }
    }
}

class SuperMario extends Mario {
    jump(): void {
        console.log("Super Mario menyerang!");
    }
}

class FireMario extends Mario {
    attack(): void {
        console.log("Fire Mario menembakkan bola api!");
    }
}

class PowerUp {
    use(mario: Mario) {
        console.log("Mario menggunakan power up!");
    }
}

class SuperMushroom extends PowerUp {
    use(mario: Mario) {
        mario.hp += 1;
        mario.currentForm = "super mario";
        console.log("Mario berubah menjadi Super Mario!");
        console.log("HP bertambah 1");
    }
}

class FireFlower extends PowerUp {
    use(mario: Mario) {
        mario.hp += 1;
        mario.currentForm = "fire mario";
        console.log("Mario berubah menjadi Fire Mario!");
        console.log("HP bertambah 1");
    }
}

class SuperStar extends PowerUp {
    use(mario: Mario) {
        mario.invincible = true;
        console.log("Mario kebal serangan!");
    }
}

//object
const mario = new Mario();
const superMario = new SuperMario();
const fireMario = new FireMario();
const mushroom = new SuperMushroom();
const flower = new FireFlower();
const star = new SuperStar();

fireMario.attack();
console.log(`HP: ${mario.hp}`);