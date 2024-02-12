const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const ApiResponse = require("./utils/ApiResponse");
const ApiError = require("./utils/ApiError");
const { connection } = require("./config/database");
const { userRoutes } = require("./routes/user.routes");
const { productRoutes } = require("./routes/product.routes");
const { authUser } = require("./middlewares/auth.middleware");
const { cartRoutes } = require("./routes/cart.routes");
require("dotenv").config();

const app = express();

// get request for homepage :
app.get("/", async (req, res) => {
  try {
    if (req) throw new ApiError(400, "Bad request");
    res.send(new ApiResponse(200, null, "Welcome to the homepage"));
  } catch (error) {
    console.log("Error", error);
    res.status(500).send({ message: error.message, ...error });
  }
});

// middleware
app.use(express.json());
app.use(cors({
  origin: [ "http://localhost:5173","http://127.0.0.1:5173","http://192.168.92.144:5173"],
  credentials: true,
}));

// // this origin and credentials is used to allow the frontend to access the backend
// app.use(cors({origin:["http://localhost:5173"],credentials:true}));
app.use(cookieParser());
app.use((req, res, next) => {
  console.log(`Method : ${req.method}`, "Path:", req.url, "Body:", req.body, "cookies:", {...req.cookies});
  next();
})


// Routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/cart",cartRoutes)

// listening the server
app.listen(process.env.PORT || 8080, async () => {
  try {
    console.log(`server is running on http://localhost:${process.env.PORT}`);
    await connection; // connection to DB
    console.log(`DB is connected ~`);
  } catch (error) {
    console.log("Error", error);
  }
});

module.exports = app
