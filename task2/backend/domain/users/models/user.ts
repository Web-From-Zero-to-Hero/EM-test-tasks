/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from "sequelize-typescript";


interface UserInt {
  firstName: string;
  lastName: string;
  age: number;
  sex: string;
  troubles: boolean;
  createdAt: string;
  updatedAt: string;
}

@Table({ tableName: 'users' })
export class User extends Model<UserInt, UserInt> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  firstName: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  lastName: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  age: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  sex: string;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  troubles: boolean;

  @Column({ type: DataType.TIME, allowNull: true })
  createdAt: string;

  @Column({ type: DataType.TIME, allowNull: true })
  updatedAt: string;
}