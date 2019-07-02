'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('ProductDetails', [
      {
        description: 'Sturdy rain boots in blue',
        quantity: 0,
        manufacture: 'Wellington',
        product_id: 1
      },
      {
        description: 'Khaki tool belt with four pockets',
        quantity: 0,
        manufacture: 'gardeners',
        product_id: 2
      },
      {
        description: 'Southern Ag OMRI tested neem oil. Broad spectru fungicide/insecticde/miticide',
        quantity: 0,
        manufacture: 'Southern Ag',
        product_id: 3
      },
      {
        description: 'A comprehensive home preserving guide for the creative cook by Sherri Brooks Vinton',
        quantity: 0,
        manufacture: 'Storey Publishing',
        product_id: 4
      },
      {
        description: 'A guide to home-scale permaculture by Toby Hemenway. The Second Edition.',
        quantity: 0,
        manufacture: 'Chelsea Green Publishing',
        product_id: 5
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('ProductDetails', null, {});

  }
};
