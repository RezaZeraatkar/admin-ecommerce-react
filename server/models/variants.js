import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/index.js';
import Product from './products.js';

// Define Variant model
class Variant extends Model {}

if (!sequelize.isDefined('Variant'))
  Variant.init(
    {
      colorId: DataTypes.INTEGER,
      sizeId: DataTypes.INTEGER,
      sleevesId: DataTypes.INTEGER,
      stock: DataTypes.INTEGER,
      productId: DataTypes.INTEGER,
    },
    { sequelize, modelName: 'variant' }
  );

// Define relationships
Product.hasMany(Variant);
Variant.belongsTo(Product);

export default Variant;
