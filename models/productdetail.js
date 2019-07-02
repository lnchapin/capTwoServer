'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductDetail = sequelize.define('ProductDetail', {
    description: DataTypes.TEXT,
    quantity: DataTypes.INTEGER,
    manufacture: DataTypes.STRING,
    product_id: DataTypes.INTEGER
  }, {});
  ProductDetail.associate = function(models) {
    // associations can be defined here
    ProductDetail.belongsTo(models.Product, {
      foreignKey: 'product_id'
    });
  };
  return ProductDetail;
};
