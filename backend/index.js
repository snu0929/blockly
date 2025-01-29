const express = require("express");
const { connection } = require("./db");
const cors = require("cors");
const vehicleRoutes = require("./routes/vehicleRoutes");
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/vehicle", vehicleRoutes);
const port = 8285;
app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
    console.log(`Server is running on port ${port}`);
  } catch (error) {
    console.log("Error connecting to DB:", error);
  }
});
