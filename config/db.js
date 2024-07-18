const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("TASK-2", "postgres", "2001", {
  host: "localhost",
  dialect: "postgres",
  logging: false
});

// Attempt to authenticate with the database
sequelize
  .authenticate() // Returns a promise

  // If the promise resolves successfully
  .then(() => {
    // Log a success message to the console
    console.log("Database connected...");
  })

  // If the promise is rejected (an error occurs)
  .catch((err) => {
    // Log the error message to the console
    console.log("Error: " + err);
  });


module.exports = sequelize;
