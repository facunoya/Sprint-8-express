module.exports = (sequelize, dataTypes) => {
    let alias = "Users";

    let cols = {
        user_id: {
            type: dataTypes.BIGINT(11),
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        country: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        phoneNumber: {
            type: dataTypes.BIGINT(20),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(256),
            allowNull: false
        },
        profile: {
            type: dataTypes.STRING(50),
            allowNull: false

        },
        avatar: {
            type: dataTypes.STRING(256),
            allowNull: false
        },
        registration_date: {
            type: dataTypes.DATE
        }

    };
    let config = {
        tableName: "users",
        timestamps: false
    };

    const User = sequelize.define(alias, cols, config);



    return User
}
