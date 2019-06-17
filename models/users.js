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
			allowNull: false,
			defaultValue: false
		},
		lastLogin: {
			type: DataTypes.DATE,
		}
	})

	User.associate = function(models) {
		User.hasMany(models.Goal)		
	}
	return User

}
