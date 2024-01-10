import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

class Product extends Model {}

if (!sequelize.isDefined('Product'))
  Product.init(
    {
      name: DataTypes.STRING,
      price: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    { sequelize, modelName: 'product' }
  );

export default Product;
