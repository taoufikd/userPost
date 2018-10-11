module.exports=(sequelize, type) => {
  return sequelize.define(
    "comment",
    {
      id: {
        type: type.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      description: type.STRING
    },
   
  );
};
