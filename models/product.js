'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    img_url: DataTypes.TEXT,
    category_id: DataTypes.INTEGER
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.hasOne(models.ProductDetail, {
      foreignKey: 'product_id'
    });
    Product.belongsTo(models.Category, {
      foreignKey: 'category_id'
    });
  };
  return Product;
};
