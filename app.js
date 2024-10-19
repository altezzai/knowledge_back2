const express = require("express");
// const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");
// dotenv.config();
var bodyParser = require("body-parser");

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded());

// parse application/json
app.use(bodyParser.json());

const submissionRoutes = require("./routes/SubmissionRoutes");
const adminRoutes = require("./routes/adminRoutes");
const publicRoutes = require("./routes/publicRoutes");
// const { sequelize } = require("./models");

const { knowledgeSequelize, janewaySequelize } = require("./config/connection");

// app.use(helmet());
// app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extend: true }));

app.use("/uploads", express.static("uploads"));

app.use("/api/v1/submissions", submissionRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/public", publicRoutes);

const PORT = process.env.PORT || 3000;
const startServer = async () => {
  try {
    await knowledgeSequelize.authenticate();
    console.log(
      "Connection to skrolls database has been established successfully."
    );

    await janewaySequelize.authenticate();
    console.log(
      "Connection to repository database has been established successfully."
    );

    await knowledgeSequelize.sync();
    console.log("skrolls database synchronized.");

    await janewaySequelize.sync();
    console.log("repository database synchronized.");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
};

process.on("SIGINT", async () => {
  console.log("SIGINT signal received: closing HTTP server");
  await knowledgeSequelize.close();
  await janewaySequelize.close();
  process.exit(0);
});

startServer();
