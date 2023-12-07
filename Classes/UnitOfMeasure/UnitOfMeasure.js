class UnitOfMeasure {
  static unitOfMeasureMap = {
    Kilograma: 'kg',
    Gramas: 'g',
    Unidade: 'unid'
  };

  constructor(unit) {
    if (!Object.keys(UnitOfMeasure.unitOfMeasureMap).includes(unit)) {
      throw new Error('Invalid unit provided');
    }

    this.unit = unit;
    this.abbreviation = UnitOfMeasure.unitOfMeasureMap[unit];
    return `Unit of measure created: ${unit}`;
  }

  getAbbreviation() {
    return this.abbreviation
  }
}

module.exports = UnitOfMeasure