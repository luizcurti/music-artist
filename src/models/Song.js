import Sequelize, { Model } from 'sequelize';

export default class Song extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 30],
            msg: 'Name must be between 1 and 30 characters.',
          },
        },
      },
      artist: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 30],
            msg: 'Artist must be between 1 and 30 characters long.',
          },
        },
      },
      imageurl: {
        type: Sequelize.TEXT,
        defaultValue: '',
      },
      notes: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [1, 200],
            msg: 'Notes must be between 1 and 200 characters long.',
          },
        },
      },
      popularity: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Popularity must be an integer',
          },
          len: {
            args: [1, 2],
            msg: 'Popularity must be between 1 and 2 characters long.',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }
}
