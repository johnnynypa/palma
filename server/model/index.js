import Sequelize from 'sequelize';
import config from './configDB';
import path from 'path';

const sequelize = new Sequelize(config.name, config.username, config.password, config.options);

//Impotamos los modelos
var Usuario = sequelize.import(path.join(__dirname, 'usuario'));
var Finca = sequelize.import(path.join(__dirname, 'finca'));
var Lote = sequelize.import(path.join(__dirname, 'lote'));
var Linea = sequelize.import(path.join(__dirname, 'linea'));
var Palma = sequelize.import(path.join(__dirname, 'palma'));

// *********** Relaciones ***************
 Usuario.belongsTo(Finca);
 Finca.hasOne(Usuario);

 Lote.belongsTo(Finca);
 Finca.hasMany(Lote);

 Linea.belongsTo(Lote);
 Lote.hasMany(Linea);

 Palma.belongsTo(Linea);
 Linea.hasMany(Palma);

 sequelize.sync({force: true});