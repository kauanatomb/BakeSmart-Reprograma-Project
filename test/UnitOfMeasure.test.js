const UnitOfMeasure = require('../Classes/UnitOfMeasure/UnitOfMeasure.js')

describe('UnitOfMeasure', () => {
  test('Create valid unit of measure', () => {
    const unit = new UnitOfMeasure('Kilograma');
    expect(unit.unit).toBe('Kilograma');
    expect(unit.abbreviation).toBe('kg');
  });

  test('Attempt to create invalid unit of measure', () => {
    expect(() => {
      new UnitOfMeasure('Litro');
    }).toThrow('Invalid unit provided');
  });
});
