module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        iduser: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        imgProfile: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        schema: 'data_sampling', // menentukan specific schema
        // timestamps: false // menonaktifkan field createdAt dan updatedAt
    })

    return users
}