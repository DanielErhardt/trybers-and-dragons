import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);

    Warrior._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;