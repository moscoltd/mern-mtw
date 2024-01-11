const mongoose = require("mongoose");

module.exports = async () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(process.env.DB, connectionParams);
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
    process.exit(1); // Exit the process on database connection failure
  }
};

