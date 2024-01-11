import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Product = sequelize.define(
  'Product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    color: DataTypes.INTEGER,
    size: DataTypes.INTEGER,
    sleeves: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
  },
  { timestamps: true }
);

export default Product;
