const StudentClass = (sequelize, Sequelize) =>
    sequelize.define(
        'student_classes',
        {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            classroom_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            eduyear_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            student_id: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            status: {
                type: Sequelize.ENUM('active', 'passed', 'repeat'),
                allowNull: false,
                defaultValue: 'active'
            },
            passed_at: {
                type: Sequelize.DATE
            },
            passed_by: {
                type: Sequelize.INTEGER,
            },
            repeat_at: {
                type: Sequelize.DATE
            },
            repeat_by: {
                type: Sequelize.INTEGER,
            },
            created_by: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            updated_by: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            deleted_by: {
                type: Sequelize.INTEGER,
            }
        },
    )

module.exports = StudentClass
