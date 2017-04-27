export default {
    name : 'palma',
	username: 'root',
	password: '23danit822',
	options: {
		host: 'localhost',
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		}
	}
}