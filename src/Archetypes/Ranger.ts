import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);

    Ranger._instances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;