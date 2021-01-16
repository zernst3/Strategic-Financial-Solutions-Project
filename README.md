# Strategic Financial Solutions Project

## Introduction

This api application was created using node, express, postgreSQL and sequelize. Contained within it are routes that allow the user to get all creditors, get a single creditor by name, update and delete creditors and run an analysis as required.

## How to run locally

In a local folder, run "npm init" and "git init." Pull the code from this repository to your local machine and then run "npm install." Once installed, create a local postgreSQL database with the name "SFS" and ensure that it's port is "5432". For instructions on this, visit: https://www.postgresql.org/docs/

To seed the database with the provided test data, run "npm run seed".

Once you are ready to start the server, run the command "npm run start". This will start the server using nodemon which will watch for any changes.

## Testing

All api routes can be tested locally by using Postman. All data retrieved will be sent in a json format to the client. To create and update a creditor, please send the data to the server in JSON format. When creating and updating a creditor, including the id in the object is not neccessary, and if used improperly, could lead to a unique constraint error. When creating and updating, sequelize will automatically add this field and increment it for each consecutive addition.

## Creditor Schema

- id: number (automatically added and increments)
- creditorName: string
- firstName: string
- lastName: string
- minPaymentPercentage: number
- balance: number

## Challenges

The most challenging part of this application, as with many others, is successfully connecting the postgreSQL database to this server. There is a lot of boilerplate code necessary for this to happen, so ensuring that it was all present and called upon properly in the proper files was important. With some research and through reading the documentation, this challenge was overcome.
