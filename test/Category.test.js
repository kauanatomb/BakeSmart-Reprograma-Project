const Category = require('../Classes/Category/Category.js');

describe('Category', () => {
  beforeEach(() => {
    Category.categoryList = [];
  });
  test('Create a new category', () => {
    const category = new Category('Fruta');
    expect(category.name).toBe('Fruta');
    expect(Category.categoryList).toContain(category);
  });

  test('Attempt to create a category that already exists', () => {
    new Category('Leite');
    expect(() => {
      new Category('Leite');
    }).toThrow('Category already exists');
  });
  

  test('Search for an existing category', () => {
    const category = new Category('Especiarias');
    const foundCategory = category.searchCategory('Especiarias');
    expect(foundCategory).toBe(category);
  });

  test('Search for a non-existing category', () => {
    const category = new Category('Fruta');
    expect(() => {
      category.searchCategory('Legumes');
    }).toThrow('Category not found');
  });

  test('Get all categories', () => {
    const egg = new Category('Ovos');
    const meat = new Category('Carnes');
  
    expect(Category.categoryList).toHaveLength(2);
    expect(Category.categoryList).toContain(egg);
    expect(Category.categoryList).toContain(meat);
  });
  
});
