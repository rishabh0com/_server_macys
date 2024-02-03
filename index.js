const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const ApiResponse = require("./utils/ApiResponse");
const ApiError = require("./utils/ApiError");
const { connection } = require("./config/database");
const { userRoutes } = require("./routes/user.routes");
const { productRoutes } = require("./routes/product.routes");
require("dotenv").config();

const app = express();

// get request for homepage :
app.get("/", async (req, res) => {
  try {
    if(req) throw new ApiError(400, "Bad request");
    res.send(new ApiResponse(200, null, "Welcome to the homepage"));
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: error.message,...error });
  }
});

// middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// listening the server
app.listen(process.env.PORT, async () => {
  try {
    console.log(`server is running on http://localhost:${process.env.PORT}`);
    await connection; // connection to DB
    console.log(`DB is connected ~`);
  } catch (error) {
    console.log("Error", error);
  }
});
