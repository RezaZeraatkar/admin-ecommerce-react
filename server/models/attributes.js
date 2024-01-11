import { DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

const Attribute = sequelize.define(
  'Attribute',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    type: DataTypes.STRING,
  },
  { timestamps: true }
);

export default Attribute;
