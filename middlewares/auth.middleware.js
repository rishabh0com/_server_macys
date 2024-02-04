const jwt = require("jsonwebtoken");
const ApiError = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
require("dotenv").config();

// function to authenticate the user
const authUser = (req, res, next) => {
    const { accessToken, refreshToken } = req.cookies;
    try {
        if (!accessToken && !refreshToken)
            // if no token is provided
            throw new ApiError(400, "tokens is required");

        jwt.verify(accessToken, process.env.accessSecret, (err, decoded) => {
            // verify the access token
            if (decoded) next();
            else if (err.message === "jwt expired") {
                jwt.verify(refreshToken, process.env.refreshSecret, (err, decoded) => {
                    // verify the refresh token
                    if (decoded) {
                        req.user = decoded;

                        const newAccessToken = jwt.sign({}, process.env.accessSecret, {
                            // generated new access token
                            expiresIn: 60,
                        });
                        if (!newAccessToken)
                            throw new ApiError(500, "internal server error");
                        res.cookie("accessToken", newAccessToken);
                        next(); // if token is valid
                        // res.send(
                        //     new ApiResponse(200, null, "token generated successfully") //
                        // );
                    } else if (err.message === "jwt expired") {
                        throw new ApiError(400, "token expired login again", err);
                    } else throw new ApiError(401, "invalid token", err); // if token is invalid
                });
            } else throw new ApiError(401, "invalid token", err); // if token is invalid
        });
    } catch (error) {
        res.status(500).send({ message: error.message, ...error });
    }
};

module.exports = { authUser };
