module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.createTable('songs', {
        id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        artist: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        imageurl: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        notes: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        popularity: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    }),
    down: (queryInterface) => queryInterface.dropTable('songs'),
};
