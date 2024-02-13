# WizardCar Backend

## Description

WizardCar Backend is the server-side component of the WizardCar application. It provides the necessary APIs for managing users, reservations, rental agencies, and vehicles. The backend is built using Node.js with NestJs/express and MongoDB for data storage.

## Features

-   User management
-   Reservation handling
-   Rental agency management
-   Vehicle management
-   Authentication and authorization
-   RESTful APIs for frontend integration

## Technologies

-   [Node.js](https://nodejs.org/)
-   [Express.js](https://expressjs.com/)
-   [MongoDB](https://www.mongodb.com/)

## Installation

### Prerequisites

-   [Node.js](https://nodejs.org/) installed
-   [MongoDB](https://www.mongodb.com/) installed and running

### Steps

1. Clone the repository:

`git clone https://github.com/Karimcherraoui/WizardCar.git`

### Navigate to the backend directory:

`cd back-end`

### Install dependencies:

`npm install`

## Create a .env file in the root directory
CONNECTION_LINK = mongodb:[YOUR-LOCALHOST:PORT]/WizardCar 
TOKEN_SECRET = 123456
### FOR DOCKER 
CONNECTION_LINK = mongodb://[NAME IMAGE MONGO]:[PORT]/WizardCar


### Dockerization

-   Ensure you have [Docker](https://www.docker.com/) installed
-   run ` docker-compose up --build ` to build the docker image



