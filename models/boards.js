module.exports = (sequelize, DataTypes) => {
  const Boards = sequelize.define(
    "Boards",
    {
      name: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING
    },
    {}
  );
  Boards.associate = db => {
    Boards.belongsTo(db.Users);
  };
  return Boards;
};
