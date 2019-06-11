/* eslint-disable no-console */
module.exports = function(sequelize, DataTypes){
	let User = sequelize.define("User", {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		googleID: {
			type: DataTypes.STRING,
			allowNull: false
		},
		isPremium: {
			type: DataTypes.BOOLEAN,
			allowNull: true
		},
		device: {
			type: DataTypes.STRING,
			allowNull: true
		}
	})

	User.associate = function(models) {
		User.hasMany(models.Goal)		
	}
	return User

}