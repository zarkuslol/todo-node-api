import { Model, DataTypes } from "sequelize";
import { sequelize } from "../instances/mysql";

export interface ItemInstance extends Model {
    id: number,
    title: string,
    done: boolean
}

export const Item = sequelize.define<ItemInstance>("Item", {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
    },
    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: "todos",
    timestamps: false
});
