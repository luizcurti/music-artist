// import { Table, Column, Model, CreatedAt, UpdatedAt, PrimaryKey } from 'sequelize-typescript';
// @Table({
//   tableName: "song",
//   timestamps:false
// })
// class Song extends Model {
//   @PrimaryKey
//   @Column
//   declare id: string;
//   @Column({ allowNull: false })
//   declare name: string;
//   @Column({ allowNull: false })
//   declare artist: string;
//   @Column({ allowNull: false })
//   declare imageurl: string;
//   @Column({ allowNull: false })
//   declare notes: string;
//   @Column({ allowNull: false })
//   declare popularity: number;
//   @CreatedAt
//   declare creationDate: Date;
//   @UpdatedAt
//   declare updatedOn: Date;
// }
// export { Song };
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class User extends sequelize_1.Model {
        static associate(models) {
            // define association here
        }
    }
    ;
    User.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        artist: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageurl: {
            type: DataTypes.STRING,
            allowNull: false
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false
        },
        popularity: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};
