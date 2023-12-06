const Recipe = require('../Classes/Recipe/Recipe.js');
const Ingredient = require('../Classes/Ingredient/Ingredient.js');
const UnitOfMeasure = require('../Classes/UnitOfMeasure/UnitOfMeasure.js');
const Category = require('../Classes/Category/Category.js');

describe('Recipe', () => {
  beforeEach(() => {
    Category.categoryList = [];
    Ingredient.ingredientsList = [];
  });
  test('Create a recipe', () => {
    const recipe = new Recipe('Lasanha', 'Deliciosa lasanha de carne', 60);

    expect(recipe.name).toBe('Lasanha');
    expect(recipe.description).toBe('Deliciosa lasanha de carne');
    expect(recipe.cookTime).toBe(60);
    expect(recipe.ingredients).toEqual([]);
  });

  test('Add ingredient to recipe', () => {
    const recipe = new Recipe('Lasanha', 'Deliciosa lasanha de carne', 60);
    const category = new Category('Carne')
    const unitOfMeasure = new UnitOfMeasure('Kilograma');
    const ingredient = new Ingredient('Carne', 500, 'Marca', category, unitOfMeasure, 10);

    recipe.addIngredient(ingredient, unitOfMeasure, 0.5);

    expect(recipe.ingredients.length).toBe(1);
    expect(recipe.ingredients[0].ingredient).toBe(ingredient);
    expect(recipe.ingredients[0].unitOfMeasure).toBe(unitOfMeasure);
    expect(recipe.ingredients[0].quantity).toBe(0.5);
  });

  test('Add invalid ingredient to recipe', () => {
    const recipe = new Recipe('Lasanha', 'Deliciosa lasanha de carne', 60);
    const category = new Category('Carne');
    const unitOfMeasure = new UnitOfMeasure('Kilograma');
    const ingredient = new Ingredient('Carne', 500, 'Marca', category, unitOfMeasure, 10);

    expect(() => {
      recipe.addIngredient(ingredient, unitOfMeasure);
    }).toThrow('Invalid ingredient or unit of measure');
  });

  test('Calculate recipe cost with different unit of measure (kg -- g)', () => {
    const recipe = new Recipe('Lasanha', 'Deliciosa lasanha de carne', 60);
    const category = new Category('Carne')
    const unitOfMeasure = new UnitOfMeasure('Kilograma');
    const ingredient = new Ingredient('Carne', 5, 'Marca', category, unitOfMeasure, 100);
    const newUnitOfMeasure = new UnitOfMeasure('Gramas');

    recipe.addIngredient(ingredient, newUnitOfMeasure, 500);
    const cost = recipe.calculateRecipeCost(recipe);

    expect(cost).toBe(10);
  });

  test('Calculate recipe cost with different unit of measure (g -- kg)', () => {
    const recipe = new Recipe('Lasanha', 'Deliciosa lasanha de carne', 60);
    const category = new Category('Carne')
    const newUnitOfMeasure = new UnitOfMeasure('Gramas');
    const ingredient = new Ingredient('Carne', 5000, 'Marca', category, newUnitOfMeasure, 100);

    const unitOfMeasure = new UnitOfMeasure('Kilograma');
    recipe.addIngredient(ingredient, unitOfMeasure, 0.5);
    const cost = recipe.calculateRecipeCost(recipe);

    expect(cost).toBe(10);
  });

  test('Calculate recipe cost with the same unit of measure', () => {
    const recipe = new Recipe('Lasanha', 'Deliciosa lasanha de carne', 60);
    const category = new Category('Carne')
    const unitOfMeasure = new UnitOfMeasure('Kilograma');
    const ingredient = new Ingredient('Carne', 5, 'Marca', category, unitOfMeasure, 100);

    recipe.addIngredient(ingredient, unitOfMeasure, 0.5);
    const cost = recipe.calculateRecipeCost(recipe);

    expect(cost).toBe(10);
  });

  test('Calculate the cost of recipe with unit of measurement mismatch', () => {
    const recipe = new Recipe('Lasanha', 'Deliciosa lasanha de carne', 60);
    const category = new Category('Carne')
    const newUnitOfMeasure = new UnitOfMeasure('Gramas');
    const ingredient = new Ingredient('Carne', 5000, 'Marca', category, newUnitOfMeasure, 100);

    const unitOfMeasure = new UnitOfMeasure('Unidade');
    recipe.addIngredient(ingredient, unitOfMeasure, 1);

    expect(() => {
      recipe.calculateRecipeCost(recipe)
    }).toThrow('Incompatible units for conversion');
  });
});
