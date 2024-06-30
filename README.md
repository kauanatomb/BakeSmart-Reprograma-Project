# BakeSmart

## Description

BakeSmart is an application designed to address the challenges faced by small culinary entrepreneurs and cooking enthusiasts in managing the production costs of their recipes. This project aims to help in setting selling prices and maximizing profits.

## Problem

Many small producers of sweets and savory snacks struggle to calculate the production costs of their recipes, which directly affects the selling prices and profits. Manual methods, Excel, or complex and expensive software are the most common options currently, making the process laborious and less accessible.

![Calculations in notes](./assets/problema.jpg)

## Solution

Many small producers of sweets and savory snacks struggle to calculate the production costs of their recipes, which directly affects the selling prices and profits. Manual methods, Excel, or complex and expensive software are the most common options currently, making the process laborious and less accessible.

![Notes](./assets/anotação.jpg)

## Features

- Registration of ingredients with unit costs and units of measure.
- Creation of recipes with ingredients, quantities, and measures.
- Calculation of production costs per recipe.

## Future features

- Suggestion of selling price based on costs and desired profit margin.
- Inventory management.
- Recipe scheduling according to a calendar.
- Visual reports to display costs and profits of each recipe.

## Classes

- **Ingredient**
    - Static list of ingredients
    - Constructor
    - Methods for data manipulation

- **Recipe**
    - Constructor
    - Methods to add ingredients, calculate costs, and unit conversion   

- **Category**
    - Static list of categories
    - Constructor
    - Method for category search

- **Unit Of Measure**
    - Static list of units of measure
    - Constructor
    - Method to obtain abbreviation

## Implementation

![Schema](./assets/schema.png)

## Project Construction

Project initiated with TDD:

![TDD failing tests](./assets/TDD.png)
----

![TDD2 passing tests](./assets/TDD2.png)

Building complex methods:

![Sudocode](./assets/sudocode.png)
-----

![Code process](./assets/processo.png)
-----

![Refactoring](./assets/refactor.png)

## Web Application Construction

[See BakeSmart repository on GitHub - Api Node.js](https://github.com/kauanatomb/nodeApi)
