module.exports = (sequelize, dataTypes) => {
    let alias = "Vehicles";
    let cols = {
        vehicle_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(80),
            allowNull: false
        },
        type: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        brand: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    let config = {
        tableName: "vehicles",
        timestamps: false
    };
    const Vehicle = sequelize.define(alias, cols, config);
    
    Vehicle.associate = function(models){
        Vehicle.hasMany(models.Products,{
            as: "Products",
            foreignKey: "vehicle_id"
        })
    }
    return Vehicle
}