module.exports = function(sequelize, DataTypes){
	let Token = sequelize.define("Token",{
		transaction: {
			type: DataTypes.STRING,
			allowNull: false
		},
		amount: {
			type: DataTypes.INTEGER,
			allowNull: false
		}

	})
	Token.associate = function(models){
		Token.belongsTo(models.User)
	}
	return Token
}