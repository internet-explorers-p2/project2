module.exports = function(sequelize, DataTypes){
	let Milestone = sequelize.define("Milestone", {
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

	Milestone.associate = function(models){
		Milestone.belongsTo(models.Goal)
	}
		
	return Milestone
}