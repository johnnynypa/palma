var Lote = function(sequelize, dataType){
    return sequelize.define('Lotes', {
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
        }
    })
}

export default Lote;