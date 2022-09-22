import { EnergyType } from '../Energy';

abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  protected static _instances = 0;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name() { return this._name; }

  get special() { return this._special; }

  get cost() { return this._cost; }

  abstract get energyType(): EnergyType;

  static createdArchetypeInstances(): number {
    return this._instances;
  }
}

export default Archetype;