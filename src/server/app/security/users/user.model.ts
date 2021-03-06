import { DataTypes, Model } from 'sequelize';
import database from '../../database/database';

class User extends Model {
  public id!: number;
  public username!: string;
  public password!: string;
  public email!: string;
  public enabled!: boolean;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING(64),
    allowNull: false,
    unique: true,
    validate: {
      min: 8,
      max: 64,
      notNull: true,
    }
  },
  password: {
    type: DataTypes.STRING(64),
    allowNull: false,
    validate: {
      min: 8,
      max: 64,
      notNull: true,
    }
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
    validate: {
      isEmail: true,
      notNull: true,
    }
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  sequelize: database,
  tableName: 'users',
});

export default User;
