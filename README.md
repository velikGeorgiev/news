## System requirements 

- NodeJS
- NPM
- MongoDB

## Installation instructions

### Ports and connection strings
In order to launch the API change the default env settings.
To do that go to **api/.env** and change the mongoDB connection string.

NOTE: If you change the **HTTP_PORT** you must change the api end point direction for the frontend in **front/news/src/environments/environment.ts** both SOCKET_ADDR and API_ENDPOINT.

### Dependencies
Go to **api/** and run

    npm install

do the same in **front/news**

### Seed data

Fill the database with junk data, to do that go to api/ and run 

    npm run seed

This will install 10 junk posts in the database. (You can cancel the script using Ctrl+C)

## Run API

To run the api go to **api/** and run the following command:

    npm run start

## Run Front (Angular)

Go to **front/news** and run the command bellow:

    ng serve --open --port 4200 --host 0.0.0.0

You can change the port if you want.
