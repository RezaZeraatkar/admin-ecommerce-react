import { Model, DataTypes } from 'sequelize';
import sequelize from '../db/index.js';

// Define Attribute model
class Attribute extends Model {}

if (!sequelize.isDefined('attribute')) {
  Attribute.init(
    {
      type: DataTypes.STRING,
      value: DataTypes.STRING,
    },
    { sequelize, modelName: 'attribute' }
  );
}

export default Attribute;
