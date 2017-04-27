var Palma = function(sequelize, dataType){
    return sequelize.define('Palmas', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataType.INTEGER
        },
        numero:{
            allowNull: false,
            type: dataType.INTEGER,
            validate:{
                notEmpty: {msg: "El numero identificador es necesario"}
            }
        },
        //Coordenada geografica n
        geofraficaN:{
            allowNull: false,
            type: DataType.FLOAT,
            validate:{
                notEmpty: {msg: "La coordenada Geo N es necesaria" }
            }
        },
        //Coordenada geografica W
        geofraficaW:{
            allowNull: false,
            type: DataType.FLOAT,
            validate:{
                notEmpty: {msg: "La coordenada Geo W es necesaria" }
            }
        },
        //Coordenada Plana n
        PlanaN:{
            allowNull: false,
            type: DataType.FLOAT,
            validate:{
                notEmpty: {msg: "La coordenada Plana N es necesaria" }
            }
        },
        //Coordenada Plana W
        PlanaW:{
            allowNull: false,
            type: DataType.FLOAT,
            validate:{
                notEmpty: {msg: "La coordenada Plana W es necesaria" }
            }
        }
    })
}