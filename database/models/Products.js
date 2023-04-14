module.exports = (sequelize, dataTypes) => {
    let alias = "Products";

    let cols = {
        product_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        descripcionImagen: {
            type: dataTypes.STRING(256),
            allowNull: false
        },
        imgURL: {
            type: dataTypes.STRING(256),
            allowNull: false
        },
        destination_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        staying: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        price: {
            type: dataTypes.FLOAT,
            allowNull: false
        },
        offer: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        checkIn: {
            type: dataTypes.DATE,
            allowNull: false
        },
        checkOut: {
            type: dataTypes.DATE,
            allowNull: false
        },
        lodging: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        vehicle_id: {
            type: dataTypes.BIGINT(11),
            allowNull: false
        },
        tour: {
            type: dataTypes.STRING(256),
            allowNull: false
        },
        tour2: {
            type: dataTypes.STRING(256),
            allowNull: false
        },
        creationDate: {
            type: dataTypes.DATE,
            allowNull: false
        },
        dueDate: {
            type: dataTypes.DATE,
            allowNull: false
        }
    };
    let config = {
        tableName: "products",
        timestamps: false
    };

    const Product = sequelize.define(alias, cols, config);
    Product.associate = function (models) {
        Product.belongsTo(models.Vehicles, {
            as: "Vehicles",
            foreignKey: "vehicle_id"
        });
        Product.belongsTo(models.Destinations, {
            as: "Destinations",
            foreignKey: "destination_id"
        })
    };


    return Product
}