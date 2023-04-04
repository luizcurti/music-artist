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

import { Model, UUIDV4 } from 'sequelize';

interface SongAttributes {
  id: string;
  name: string;
  artist: string;
  imageurl: string;
  notes: string
  popularity: number
}

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<SongAttributes> 
  implements SongAttributes {
    id!: string;
    name!: string;
    artist!: string;
    imageurl!: string;
    notes!: string
    popularity!: number
  };
  User.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
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