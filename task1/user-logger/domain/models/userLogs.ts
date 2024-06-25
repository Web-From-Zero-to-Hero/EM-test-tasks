/* eslint-disable prettier/prettier */
import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserLogInt {
  id: number;
  userId: number;
  actionType: string;
  createdAt: string;
  updatedAt: string;
}

@Table({ tableName: 'user_logs' })
export class UserLogs extends Model<UserLogInt, UserLogInt> {
  
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  userId: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  actionType: string;

  @Column({ type: DataType.TIME, allowNull: true })
  createdAt: string;

  @Column({ type: DataType.TIME, allowNull: true })
  updatedAt: string;
}
