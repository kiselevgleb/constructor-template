// TODO: write your code here
import sum from './basic';


export default function Character(name, type) {
    if (name.length>1&&name.length<11){
        this.name = name;
    }
    else{
        throw new Error("error name size");
    }

    switch (type) {
        case 'Bowman':
            this.type = type;
            this.attack = 25;
            this.defence = 25;
          break;
        case 'Swordsman':
            this.type = type;
            this.attack = 40;
            this.defence = 10;
          break;
        case 'Magician':
            this.type = type;
            this.attack = 10;
            this.defence = 40;
          break;
        case 'Daemon':
            this.type = type;
            this.attack = 10;
            this.defence = 40;
          break;
        case 'Undead':
            this.type = type;
            this.attack = 25;
            this.defence = 25;
          break;
        case 'Zombie':
            this.type = type;
            this.attack = 40;
            this.defence = 10;
          break;
        default:
            throw new Error("error type");
          break;  
      }
      this.health = 100;
      this.level = 1;
    
  }
