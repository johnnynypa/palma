var Usuario = function(sequelize, dataType){
    return sequelize.define('Usuarios', {
        id: {
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            type: dataType.INTEGER
        },
        userName:{
            allowNull:false,
            type: dataType.STRING,
            isUnique: true,
            validate:{
                notEmpty: {
                    msg:"La cuenta de usuario es necesaria"
                }
            }
        },
        password:{
            allowNull: false,
            type: dataType.STRING,
            validate:{
                isLongEnough: (val) =>{
                    if(val.length <6)
                        throw new Error("La contraseña debe tener un minimo de 6 caracteres"):
                },
            }
        },
        mail:{
            allowNull: false,
            type: dataType.STRING,
            validate:{
                isEmail: {msg: "El correo no es valido"},
                notEmpty:{msg: "El correo es necesario"}
            }
        }
    });
}

export default Usuario;