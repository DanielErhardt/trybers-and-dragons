abstract class Race {
  private _name: string;
  private _dexterity: number;

  protected static _instances = 0;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  get name() { return this._name; }

  get dexterity() { return this._dexterity; }

  abstract get maxLifePoints(): number;

  static createdRacesInstances() {
    throw new Error('Not implemented');
  }
}

export default Race;