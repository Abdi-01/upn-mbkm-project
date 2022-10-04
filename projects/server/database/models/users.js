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
        imgProfile: {
            type: DataTypes.STRING,
            defaultValue: 'https://pertaniansehat.com/v01/wp-content/uploads/2015/08/default-placeholder.png'
        },
        role: DataTypes.STRING,
        status: {
            type: DataTypes.STRING,
            defaultValue: 'unverified'
        },
    }, {
        schema: 'data_sampling', // menentukan specific schema
        // timestamps: false // menonaktifkan field createdAt dan updatedAt
    })

    return users
}