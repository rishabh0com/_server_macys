# REST API for macy's Ecommerce application

This is a REST API's documentation for macy's Ecommerce application providing a REST
API model.

The entire application is contained within the `_server_macysEcommerce` file.

## Clone repo in your system

https://github.com/rishabh0com/server_macysEcommerce.git

## Installation

npm install

## Run the app

    nodemon index.js

# REST API

The REST API to the macy's ecommerce app is described below.

## User's Api's

### Request for user registration

`POST /users/register`

    Accept: 'body:{firstName,lastName,email,password}' http://localhost:8080/users/register

### Response

    {
    "statusCode": 200,
    "success": true,
    "message": "User created successfully",
    "data": {
        "firstName": "Demo",
        "lastName": "Demo",
        "email": "demo@com",
        "password": "$2b$09$bYMcFsXwInAQBC6o/80iyeGzWFOs6/EKIiV2p01FmSk4Bu/k/bH..",
        "_id": "6dc9f2f48edg243cg50r2deb"
    }

}

### Request for user login

`POST /users/login`

    Accept: 'body:{email,password}' http://localhost:8080/users/login

### Response + Cookies

    {
    "statusCode": 200,
    "success": true,
    "message": "User logged in successfully",
    "data": {
        "_id": "65b4aa99be812e4dfeef42b6",
        "firstName": "Demo",
        "lastName": "Demo",
        "email": "demo@com",
        "password": "$2b$09$OOXtDd5anCfKOyKgcCuuTOleyDFPFGc4p66JwYA7NgQpWlWF.R6Ei",
        "birthday": "01-12"
    }

}

### Request for user logout

`GET /users/logout`

    Accept: '{withCredintial: true}' http://localhost:8080/users/logout

### Response

{
"statusCode": 200,
"success": true,
"message": "User logged out successfully",
"data": null
}

## Product Api's

### Request for all products

`GET /products`

    Accept: 'nothing' http://localhost:8080/products

### Response

{
"statusCode": 200,
"success": true,
"message": "Products found",
"data": [{},{},]
}

## Cart Api's

### Request for adding the product in cart

`POST /cart/add`

    Accept: 'body: {userId,product}, {withCredintial: true}'
    http://localhost:8080/cart/add?userId=userId

### Response

{
"statusCode": 200,
"success": true,
"message": "Products added successfully",
"data": {product data--}
}

### Request for finding user's products in cart

`GET /cart/find`

    Accept: '{withCredential: true}'
    http://localhost:8080/cart/find?userId=userId

### Response

{
"statusCode": 200,
"success": true,
"message": "Products retrieved successfully",
"data": {product data--}
}

### Request for removing the product from cart

`DELETE /cart/delete/:id`

    Accept: '{withCredential: true}'
    http://localhost:8080/cart/delete/:id

### Response

{
"statusCode": 200,
"success": true,
"message": "Products retrieved successfully",
"data": {product data--}
}
