const Ingredient = require('../Ingredient/Ingredient.js')
const UnitOfMeasure = require('../UnitOfMeasure/UnitOfMeasure.js')

class Recipe {
  constructor(name, description, cookTime) {
    this.name = name
    this.description = description
    this.cookTime = cookTime
    this.ingredients = []
  }

  addIngredient(ingredient, unitOfMeasure, quantity) {
    if (ingredient instanceof Ingredient && unitOfMeasure instanceof UnitOfMeasure && typeof quantity === "number") {
      this.ingredients.push({
        ingredient,
        quantity,
        unitOfMeasure
      });
    } else {
      throw new Error('Invalid ingredient or unit of measure');
    }
  }

  calculateRecipeCost(recipe) {
    let totalCost = 0;

    recipe.ingredients.forEach(({ ingredient, quantity, unitOfMeasure }) => {
      const ingredientUnitAbbreviation = ingredient.getUnitOfMeasure().getAbbreviation();
      const recipeUnitAbbreviation = unitOfMeasure.getAbbreviation();

      if (recipeUnitAbbreviation !== ingredientUnitAbbreviation) {
        const convertedQuantity = this.convertUnitOfMeasure(quantity, recipeUnitAbbreviation, ingredientUnitAbbreviation);
        const cost = (convertedQuantity / ingredient.getQuantity()) * ingredient.getPrice();
        totalCost += cost;
      } else {
        const cost = (quantity / ingredient.getQuantity()) * ingredient.getPrice();
        totalCost += cost;
      }
    });
    return totalCost;
  }

  convertUnitOfMeasure(quantity, recipeUnit, ingredientUnit) {
    if (recipeUnit === 'kg' && ingredientUnit === 'g') {
      return quantity * 1000;
    } else if (recipeUnit === 'g' && ingredientUnit === 'kg') {
      return quantity / 1000;
    } else {
      throw new Error('Incompatible units for conversion');
    }
  }
}

module.exports = Recipe