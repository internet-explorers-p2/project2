module.exports = function(sequelize, DataTypes){
	let Goal = sequelize.define("Goal", {
		title:{
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		progress:{
			type: DataTypes.DOUBLE
		},
		hasDeadline: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		},
		deadline: {
			type: DataTypes.STRING,
			allowNull: true
		},
		completed: {
			type: DataTypes.BOOLEAN,
			allowNull: false
		}
	})

	Goal.associate = function(models) {
		Goal.belongsTo(models.User, {
			foreignKey: {
				allowNull: false
			}
		})
	}
	return Goal
}