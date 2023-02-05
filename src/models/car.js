import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

/**
 * @openapi
 * components:
 *   schemas:
 *     addproduct:
 *       type: object
 *       properties:
 *         product_id:
 *           type: integer
 *           example: 1
 *         cart_id:
 *           type: integer
 *           example: 1
 *         quatity:
 *           type: integer
 *           example: 1
 */
export default class car extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    total_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0.00
    }
  }, {
    sequelize,
    tableName: 'car',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "car_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
