import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);

    Mage._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;