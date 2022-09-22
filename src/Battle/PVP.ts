import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(_playerOne: Fighter, private _playerTwo: Fighter) {
    super(_playerOne);
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._playerTwo.lifePoints > 0) {
      this.player.attack(this._playerTwo);
      this._playerTwo.attack(this.player);
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;