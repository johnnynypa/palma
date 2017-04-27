var Finca = function(sequelize, dataType){
    return sequelize.define('Fincas', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataType.INTEGER
        },
        name:{
            allowNull:false,
            type: dataType.STRING,
            isUnique: true,
            validate:{
                notEmpty: {
                    msg:"La cuenta de usuario es necesaria"
                }
            }
        }
    })
}

export default Finca