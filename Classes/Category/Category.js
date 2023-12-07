class Category {
  static categoryList = [];

  constructor(name) {
    if (Category.categoryList.find(category => category.name === name)) {
      this.name = name;
      throw new Error('Category already exists');
    }

    this.name = name;
    Category.categoryList.push(this);
  }

  searchCategory(name) {
    const foundCategory = Category.categoryList.find(category => category.name === name);

    if (!foundCategory) {
      throw new Error('Category not found');
    }

    return foundCategory;
  }
}
module.exports = Category