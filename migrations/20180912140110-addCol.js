module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.addColumn("Boards", "user_id", {
      type: Sequelize.INTEGER,
      references: {
        model: "Boards",
        key: "id"
      }
    }),

  down: queryInterface => queryInterface.removeColumn("Boards", "user_id")
};
