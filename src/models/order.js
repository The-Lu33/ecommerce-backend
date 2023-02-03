import _sequelize from "sequelize";
const { Model, Sequelize } = _sequelize;

export default class order extends Model {
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
        total_price: {
          type: DataTypes.DECIMAL,
          allowNull: true,
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: "users",
            key: "id",
          },
        },
        status: {
          type: DataTypes.ENUM("pay", "pending"),
          allowNull: true,
          defaultValue: "pending",
        },
      },
      {
        sequelize,
        tableName: "order",
        schema: "public",
        timestamps: false,
        indexes: [
          {
            name: "order_pkey",
            unique: true,
            fields: [{ name: "id" }],
          },
        ],
      }
    );
  }
}
