const Ingredient = require('../Classes/Ingredient/Ingredient.js');
const Category = require('../Classes/Category/Category.js');
const UnitOfMeasure = require('../Classes/UnitOfMeasure/UnitOfMeasure.js');

describe('Ingredient', () => {
  beforeEach(() => {
    Ingredient.ingredientsList = [];
    Category.categoryList = []
  });

  test('Create valid ingredient', () => {
    const category = new Category('Frutas');
    const unitOfMeasure = new UnitOfMeasure('Kilograma');
    
    const ingredient = new Ingredient('Maçã', 2, 'Marca', category, unitOfMeasure, 3.99);
    
    expect(ingredient.getName()).toBe('Maçã');
    expect(ingredient.getQuantity()).toBe(2);
    expect(ingredient.getBrand()).toBe('Marca');
    expect(ingredient.getCategory()).toBe(category);
    expect(ingredient.getUnitOfMeasure()).toBe(unitOfMeasure);
    expect(ingredient.getPrice()).toBe(3.99);
    expect(Ingredient.ingredientsList).toContain(ingredient);
  });

  test('Attempt to create invalid ingredient', () => {
    const category = new Category('Frutas');
    const unitOfMeasure = new UnitOfMeasure('Kilograma');
    
    expect(() => {
      new Ingredient('Maçã', 2, 'Marca', category, 'InvalidUnit', 3.99);
    }).toThrow("Error to create ingredient, data incorrect");
  });

  test('Get ingredient properties', () => {
    const category = new Category('Frutas');
    const unitOfMeasure = new UnitOfMeasure('Kilograma');
    
    const ingredient = new Ingredient('Maçã', 2, 'Marca', category, unitOfMeasure, 3.99);
    
    expect(ingredient.getName()).toBe('Maçã');
    expect(ingredient.getQuantity()).toBe(2);
    expect(ingredient.getBrand()).toBe('Marca');
    expect(ingredient.getCategory()).toBe(category);
    expect(ingredient.getUnitOfMeasure()).toBe(unitOfMeasure);
    expect(ingredient.getPrice()).toBe(3.99);
  });

  test('Set ingredient properties', () => {
    const category = new Category('Frutas');
    const unitOfMeasure = new UnitOfMeasure('Kilograma');
    
    const ingredient = new Ingredient('Maçã', 2, 'Marca', category, unitOfMeasure, 3.99);
    
    ingredient.setName('Banana');
    ingredient.setQuantity(3);
    ingredient.setBrand('Nova Marca');
    const newCategory = new Category('Legumes');
    ingredient.setCategory(newCategory);
    const newUnitOfMeasure = new UnitOfMeasure('Gramas');
    ingredient.setUnitOfMeasure(newUnitOfMeasure);
    ingredient.setPrice(2.5);
    
    expect(ingredient.getName()).toBe('Banana');
    expect(ingredient.getQuantity()).toBe(3);
    expect(ingredient.getBrand()).toBe('Nova Marca');
    expect(ingredient.getCategory()).toBe(newCategory);
    expect(ingredient.getUnitOfMeasure()).toBe(newUnitOfMeasure);
    expect(ingredient.getPrice()).toBe(2.5);
  });
});
