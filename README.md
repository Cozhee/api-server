# LAB - Class 401

## Project: Basic Express Server

### Author: Cody Davis

### Problem Domain
Setting up a basic express server to configure heroku deployment and to create tests for basic routes. Implemented with sequelize.

### Links and Resources
- [Github](https://github.com/Cozhee/basic-api-server/pulls)
- [Heroku Dev Deployment](https://lab4-api-server.herokuapp.com/)

### Setup

#### `.env` requirements (where applicable)
- `USERNAME=<db-username>`
- `PW=<db-password>`
- `DB_NAME=<db-name>`
- `HOST=<host-url>`

#### How to initialize/run your application (where applicable)
`npm install` to get the dependencies
`nodemon` to run the server
Open `http://localhost:3001/` to view the server

#### How to use your library (where applicable)
N/A

#### Features / Routes
- Feature One: Added route
- GET : `/`

- Feature Two: Added route
- GET: `/food`

- Feature Three: Added route
- GET: `/food/:id`

- Feature Four: Added route
- PUT: `/food/:id`

- Feature Five: Added route
- GET: `/clothes`

- Feature Six: Added route
- GET: `/clothes/:id`

- Feature Seven: Added route
- PUT: `/clothes/:id`

- Feature Five: Added route
- DELETE: `/food/:id`
- DELETE: `/clothes/:id`

#### Tests
To run tests type `npm test`. Server does not need to be running in another instance
Basic tests that will check if routes are working correctly

