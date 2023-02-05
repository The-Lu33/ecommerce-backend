import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

/**
 * @openapi
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: freidora de aire
 *         price:
 *           type: integer
 *           example: 100.00
 *         qty_available:
 *           type: integer
 *           example: 1
 *         status:
 *           type: string
 *           example: available
 *         image_url:
 *           type: string
 *           example: imageURL
 *         user_id:
 *           type: integer
 *           example: 1
 *     created:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: freidora de aire
 *         price:
 *           type: number
 *           example: 100.00
 *         qty_available:
 *           type: number
 *           example: 1
 *         status:
 *           type: string
 *           example: available
 *         image_url:
 *           type: string
 *           example: imageURL
 *         user_id:
 *           type: integer
 *           example: 1
 */
export default class product extends Model {
  static init(sequelize, DataTypes) {
    return super.init(
      {
        id: {
          autoIncrement: true,
          autoIncrementIdentity: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        price: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        qty_available: {
          type: DataTypes.DECIMAL,
          allowNull: false,
        },
        image_url: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        status: {
          type: DataTypes.ENUM("not_available", "available"),
          allowNull: true,
          defaultValue: "available",
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: true,
          references: {
            model: "users",
            key: "id",
          },
        },
      },
      {
        sequelize,
        tableName: "product",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "product_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
