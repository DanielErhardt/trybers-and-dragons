import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(player: Fighter, private _enemies: SimpleFighter[]) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._enemies.length > 0) {
      this.player.attack(this._enemies[0]);
      this._enemies[0].attack(this.player);
      this._enemies = this._enemies.filter((enemy) => enemy.lifePoints > 0);    
    }

    return this._enemies.length === 0 ? 1 : -1;
  }
}

export default PVE;