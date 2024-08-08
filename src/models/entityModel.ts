import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

/* Modelo de Entity - Table entities*/

/* entities - Model
  id INT PRIMARY KEY
  name STRING
*/

@Table({
    tableName: "entities",
    timestamps: false
})
export default class Entity extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number; // Property id

    @Column({
        type: DataType.STRING(200),
        allowNull: false
    })
    name!: string; // Property name
}