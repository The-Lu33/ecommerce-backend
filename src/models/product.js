import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

/**
 * @openapi
 * components:
 *    schemas:
 *      created:
 *        type: object
 *        properties:
 *          name:
 *            type: string
 *            example: Freidora de Aire
 *          qty_available:
 *            type: number
 *            example: 1
 *          price:
 *            type: number
 *            example: 100.00
 *          image_url:
 *            type: string
 *            example: https://ae01.alicdn.com/kf/Scd7c8f057c764c56be0ace4e15dbadf0f/ANYUFA-freidora-de-aire-el-ctrica-sin-aceite-de-4-6L-horno-de-360-LED-para.jpg_Q90.jpg_.webp
 *          user_id:
 *            type: number
 *            example: 1
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
