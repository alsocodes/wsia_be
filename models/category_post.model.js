const CategoryPost = (sequelize, Sequelize) =>
    sequelize.define(
        'category_post',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },

            post_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            category_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
            }
        },
    )

module.exports = CategoryPost
