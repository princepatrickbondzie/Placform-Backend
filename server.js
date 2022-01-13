require("dotenv").config();
const express = require("express");
const cors = require("cors");
const businessRoutes = require("./routes/businessRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

require("./config/dbConnect");
// const PORT = process.env.PORT || 9000;

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", businessRoutes, categoryRoutes);

app.listen(9000, () => console.log("Placform server running..."));
