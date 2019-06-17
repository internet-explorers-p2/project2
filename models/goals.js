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
			type: DataTypes.INTEGER,
			allowNull: false,
			defaultValue: 0
		},
		hasDeadline: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
		},
		deadline: {
			type: DataTypes.STRING,
			allowNull: true
		},
		completed: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false
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