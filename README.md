## Car store Backeend with Express, mongoose, Typescript, MongoDB

This is my first time using typescript in this way and also making a backend with this method It was fascinating to finally make something like this
as I mentioned earlier here are these technologies are used:

- Typescript
- Node
- Express
- Mongoose
- MongoDB

### [The backend Url](https://assignment2-tawny-five.vercel.app/)

The backend has several endpoints and they all have different uses such as:

## The car Endpoints:

#### This endpoint will help us get all the cars in our backend:**`/api/cars`** and if we add this ese query function **`/api/cars?searchTerm=category`** it will show cars based on the catagoty  searchTerm can be **`brand`**, **`model`**,**` category`**
#### This endpoint will help us to create a car in our backend:**`/api/cars`**
#### To get a specific car we will use this endpoint: **`/api/cars/:carId`**
#### To update a car we will use this endpoint: **`/api/cars/:carId`** 
#### To delete a car we will use this endpoint: **`/api/cars/:carId`** 

## The order Endpoints:

#### This endpoint will help us to create an order in our backend:**`/api/orders`**
#### This endpoint will help us to calculate the revenue from all the orders in our backend:**`/api/orders/revenue`**

## How to set up the project into local machine?
Here are the steps:
1. Clone the project into your local machine
1. Then open the vs code and in the command promt add this command: **`npm i`** it will install all the necessary depedency.
1. create a **`.env`** file where you have to mantion the uri for the database.

Thats it with all these easy 3 steps you can run this project into your local mechine but make sure you have node installed in your local mechine.
