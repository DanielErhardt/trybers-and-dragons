import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);

    Necromancer._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;