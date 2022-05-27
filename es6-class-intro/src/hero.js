import Character from './character';
// function Hero(name) {
//   Character.call(this);
//   this.name = name;
// }

// Hero.prototype = Object.create(Character.prototype);

// Hero.prototype.getName = function () {
//   return this.name;
// };
class Hero extends Character {
  constructor(name) {
    super();
    this.name = name;
  }
  getName() {
    return this.name;
  }
}
export default Hero;
