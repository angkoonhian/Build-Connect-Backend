# Build-Connect-Backend
<p align="center">
 <h1 align="center">Build Connect</h1>
 <h2 align="center">Build Connect Backend Service</h2>
 <p align="center">Backend web service in TypeScript, NodeJS, Express, and MongoDB for BuildConnect.</p>
</p>
## Quick Start

### Global dependencies

Latest version of the app has been tested to run on:

```
- Node v14.15.3
- TypeScript v4.2.3
- Mongoose v5.11.15
- MongoDb v3.6.4
```

### Package manager

We are using Node Package Manager (NPM) for our backend WebService (BuildConnect) : https://docs.npmjs.com/about-npm 

### Setting up

#### Install project dependencies

On the command line in the project root directory:

```bash
npm install
```

#### Set up config variables

No configuration needed as of now. Will require custom config in future.

#### Database setup

We are using MongoDB atlas, mongodb cloud service to store our data for now, no need to set up database.

> **_NOTE:_** If mock data import fails, run the create database tables command and try again.

##### Database Migration

Migrations are used for version control of database schema in production. To make any changes to the database, create a new migration file.

### Running the app

On the command line in the project root directory:

```bash
#### Build and run build in production locally
npm run server
```

> **_NOTE:_** To run the above commands on specific test file (or files in a directory), append the file or directory path to the respective command.

### Run Prettier formatter

On the command line in the project root directory:

```bash
Still working on command for prettierFormatting codes
```

## Documentation

API Documentation

-   Supported and running live on BuildConnect: ~ we will be using heroku or something to host API docs or even locally with swagger : https://swagger.io/ 

-   we will have a non sql schema diagram in future, host it somewhere to display.

## License

-   License: MIT
