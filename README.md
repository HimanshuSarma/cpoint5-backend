### Please do the following:

1. Run "npm i"
2. Run "npm start" (Make sure the port 8080 on your machine is not occupied)
3. I have a variable named "MONGOURI" in the .env file which is the connection string of the mongodb
atlas instance
4. There are two endpoints:
    1. POST, endpoint: /grocery/single, body: {name: 'some string'} (This endpoint creates a new grocery
    item in the database)
    2. GET, endpoint /grocery/all (This endpoint fetches all the grocery items)
