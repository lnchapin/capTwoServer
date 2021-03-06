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
    return queryInterface.bulkInsert('Products', [
      {
        name: 'Rain Boots',
        description: 'boots',
        price: 2499,
        img_url: 'https://ae01.alicdn.com/kf/HTB1UTEgQXXXXXbbXVXXq6xXFXXX9/Women-s-wellington-rubber-boots-blue-rain-boots-wear-spring-summer-boots-for-woman.jpg_640x640.jpg',
        category_id: 1
      },
      {
        name: 'Gardening Tool Belt',
        description: 'tool belt',
        price: 1500,
        img_url: 'https://www.gardeners.com/dw/image/v2/AABF_PRD/on/demandware.static/-/Sites-GSC_Products/default/dw3b9d9a77/Products/8592383_6158_cotton-canvas-garden-tool-belt-khaki-green.jpg?sw=840&sh=1120&sm=fit',
        category_id: 1
      },
      {
        name: 'Triple Action Neem Oil',
        description: 'Chemical',
        price: 1254,
        img_url: 'https://images.homedepot-static.com/productImages/1e2f1b73-fba4-411c-9dd3-cfd7b8181e3f/svn/southern-ag-fruit-vegetable-disease-control-100048933-64_1000.jpg',
        category_id: 2
      },
      {
        name: "Put 'em Up",
        description: 'Book',
        price: 2099,
        img_url: 'https://images-na.ssl-images-amazon.com/images/I/910Zv3cYsNL.jpg',
        category_id: 3
      },
      {
        name: "Gaia's Garden",
        description: 'Book',
        price: 1800,
        img_url: 'https://amp.businessinsider.com/images/5cefea8811e2053acc4680e9-750-750.jpg',
        category_id: 3
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
    return queryInterface.bulkDelete('Products', null, {});
  }
};
