const Category = require('../Category/Category.js')
const UnitOfMeasure = require('../UnitOfMeasure/UnitOfMeasure.js')

class Ingredient {
  static ingredientsList = []
  constructor(name, quantity, brand, category, unitOfMeasure, price) {
    if (category instanceof Category && unitOfMeasure instanceof UnitOfMeasure) {
      this.name = name;
      this.quantity = quantity;
      this.brand = brand;
      this.category = category;
      this.unitOfMeasure = unitOfMeasure;
      this.price = price;

      Ingredient.ingredientsList.push(this)
      return `Ingredient created ${name}`
    } else {
      throw new Error("Error to create ingredient, data incorrect")
    }
  }

  getName() {
    return this.name;
  }

  getQuantity() {
    return this.quantity;
  }

  getBrand() {
    return this.brand;
  }

  getCategory() {
    return this.category;
  }

  getUnitOfMeasure() {
    return this.unitOfMeasure;
  }

  getPrice() {
    return this.price;
  }

  setName(name) {
    this.name = name;
  }

  setQuantity(quantity) {
    this.quantity = quantity;
  }

  setBrand(brand) {
    this.brand = brand;
  }

  setCategory(category) {
    this.category = category;
  }

  setUnitOfMeasure(unitOfMeasure) {
    this.unitOfMeasure = unitOfMeasure;
  }

  setPrice(price) {
    this.price = price;
  }
}

module.exports = Ingredient