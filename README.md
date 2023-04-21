# music-artist

Before booting the system, run "yarn install"

To run the unit tests "yarn test"

You need docker to run the application

You can use the container with docker-compose up

Open a new terminal and enter the music-song directory

Go to mysql and create a schema music

Run yarn typeorm migrations:run to create the table

The route for testing the api is: http://localhost:3005/api/music/

The file "MUSIC.postman_collection.json" contains the routes for testing in Postman