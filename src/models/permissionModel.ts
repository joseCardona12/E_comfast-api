import { AutoIncrement, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import Role from "./roleModel";
import Entity from "./entityModel";

/* Modelo de Permission - Table permissions*/
/* permissions - Model
  id INT PRIMARY KEY
  canCreate BOOLEAN
  canUpdate BOOLEAN
  canDelete BOOLEAN
  canGet BOOLEAN
  role_id INT FOREIGN KEY
  entity_id INT FOREIGN KEY
*/

@Table({
    tableName: "permissions",
    timestamps: false
})
export default class Permission extends Model{
    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.INTEGER
    })
    id!: number; // Property id

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canCreate!: boolean; // Propery canCreate 

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canUpdate!: boolean; // Propery canUpdate 

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canDelete!: boolean; // Propery canDelete
    
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    canGet!: boolean; // Propery canGet
    
    @ForeignKey(()=>Role)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    role_id!: number; //Property role_id

    @ForeignKey(()=>Entity)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    entity_id!: number; //Property entity_id
}