import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import User from "./userModel";

/* Modelo de Role - Table roles*/

/* roles - Model
  id INT PRIMARY KEY
  name STRING
*/
@Table({
    tableName: "roles",
    timestamps: false
})
export default class Role extends Model{
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
    name!: string // Property name

    //Relations
    @HasMany(()=>User)
    users!: User[];
}