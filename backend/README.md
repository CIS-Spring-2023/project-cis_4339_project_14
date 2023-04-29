# Backend

This implementation is for NodeJS based on [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/) and uses [mongoose](https://mongoosejs.com/) as the ODM.

## Project setup

    npm install

### Before startup
You need a MongoDB database ready.

Make sure you have a collection named 'org' in your database that contains at least one organization with the orgid listed in your environment variable (see below).

Setup a .env file with the following variables: MONGO_URL, PORT and ORG

    MONGO_URL = "mongodb+srv://admin:test123@cis4339cluster.urmwerk.mongodb.net/?retryWrites=true&w=majority"
    PORT = 27017
    ORG = "1"

### Compiles and hot-reloads for development

    npm start

## Postman Documentation

Can be found at <https://documenter.getpostman.com/view/23133138/2s83mdJiqh>
