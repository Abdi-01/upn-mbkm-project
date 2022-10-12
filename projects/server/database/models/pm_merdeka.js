module.exports = (sequelize, DataTypes) => {
    const pm_merdekas = sequelize.define('pm_merdekas', {
        idmerdeka: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type: DataTypes.STRING,
        mahasiswa: DataTypes.STRING,
        kode_jadwal: DataTypes.STRING,
        mk_host: DataTypes.STRING,
        sks: DataTypes.INTEGER,
        nilai: DataTypes.INTEGER
    }, {
        schema: 'data_sampling', // menentukan specific schema
        timestamps: false // menonaktifkan field createdAt dan updatedAt
    })

    return pm_merdekas;
}