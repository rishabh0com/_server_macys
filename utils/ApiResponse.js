class ApiResponse {
    constructor(statusCode, data, msg){
        this.statusCode = statusCode
        this.success = statusCode < 400
        this.message = msg
        this.data = data
    }
}

// use
/* 
res.status(201).send(new ApiResponse(200, createdUser, "User registered Successfully"))
*/


// let res = new ApiResponse(200, "data", "logged in")
// console.log(res)
module.exports = ApiResponse 