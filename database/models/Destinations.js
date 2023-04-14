module.exports = (sequelize, dataTypes) => {
    let alias = "Destinations";
    let cols = {
        destination_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(80),
            allowNull: false
        },
        ranking: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        season: {
            type: dataTypes.STRING(256),
            allowNull: false
        }
    };
    let config = {
        tableName: "destinations",
        timestamps: false
    };
    const Destination = sequelize.define(alias, cols, config);
    Destination.associate = function(models){
        Destination.hasMany(models.Products,{
            as: "Products",
            foreignKey: "destination_id"
        })
    } 
    return Destination
}