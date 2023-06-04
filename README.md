# Todo-App

Todo-App is a web application that allows users to manage their to-do list. Users can add, update, delete, and view their todos through the provided API endpoints.

## Installation

To install the Todo-App, use the following command:
```bash
npm install
```
This will install all the necessary dependencies required to run the application.

## Running the Application

To start the Todo-App, use the following command:
```bash
npm start
```
This will start the application and make it accessible at the designated port.

## Testing

To run the tests for the Todo-App, use the following command:
```bash
npm run test
```
This will execute the test suite using the Mocha test framework.

## Development
### `.env`

Update the `.env` file with the following configurations:

```bash
DATABASE_URL=<your db connection>
JWT_KEY=<your jwt key>
ALLOWED_ORIGINS=<allowed origins separated by comma>
```

### `.env.test`

For running tests, update the `.env.test` file with the following configurations:

```bash
NODE_ENV=test
TEST_USERNAME=<test username>
TEST_PASSWORD=<test username>
TEST_URL=<api base url>
DATABASE_TEST_URL=<test db connection>
```

## Technologies Used

The Todo-App utilizes the following technologies:

- Redis: Redis is used for session saving, providing a persistent session storage solution.
- JWT: JSON Web Tokens are used for token-based authentication and authorization.
- Sequelize: Sequelize is used as an ORM (Object-Relational Mapping) tool for managing database models and migrations.
- Mocha: Mocha is a JavaScript test framework used for writing and executing tests for the application.
- Joi: Joi is used for schema validation, ensuring that the incoming data meets the specified requirements.
- Pino: Pino is used for logs formatting, providing a structured and efficient logging solution.
- MySQL: MySQL is used as the database for storing the Todo-App data.
