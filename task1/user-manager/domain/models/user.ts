/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserInt {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

@Table({ tableName: 'users' })
export class User extends Model<UserInt, UserInt> {
  
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  username: string;
  
  @Column({ type: DataType.TEXT, allowNull: false })
  firstName: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  lastName: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  email: string;

  @Column({ type: DataType.TIME, allowNull: true })
  createdAt: string;

  @Column({ type: DataType.TIME, allowNull: true })
  updatedAt: string;
}
