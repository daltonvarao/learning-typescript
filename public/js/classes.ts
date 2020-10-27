class UserAccount {
  name: string;
  protected age: number;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  logDetails(): void {
    console.log(`The player ${this.name} is ${this.age} years old.`);
  }
}

const dalton = new UserAccount("Dalton", 22);
console.log(dalton);
dalton.logDetails();

class CharAccount extends UserAccount {
  private nickname: string;
  protected level: number;

  constructor(name: string, age: number, nickname: string, level: number) {
    super(name, age);
    this.nickname = nickname;
    this.level = level;
  }

  get getLevel() {
    return this.level;
  }

  set setLevel(level: number) {
    this.level = level;
  }
}

const felipe = new CharAccount("felipe", 22, "dalton10", 100);

felipe.logDetails();

felipe.setLevel = 1000;

console.log(felipe.getLevel);
