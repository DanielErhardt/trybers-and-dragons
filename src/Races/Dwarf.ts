import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Dwarf._instances += 1;

    this._maxLifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances() {
    return Dwarf._instances;
  }
}

export default Dwarf;