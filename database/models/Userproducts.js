module.exports = (sequelize, dataTypes) => {
    let alias = "Userproducts";
    
    let cols = {
        user_products_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        user_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        process_date:{
            type: dataTypes.DATE,
            allowNull: false
        }
    };
    let config = {
        tableName: "userproducts",
        timestamps: false
    };
    
    const Userproduct = sequelize.define(alias, cols, config);
    // Product.associate = function(models){
    //     Product.belongsTo(models.Vehicles, {
    //         as: "Vehicles",
    //         foreignKey: "vehicle_id"
    //     });
    //     Product.belongsTo(models.Destinations, {
    //         as: "Destinations",
    //         foreignKey: "destination_id"
    //     })
    // };
    

    return Userproduct
}