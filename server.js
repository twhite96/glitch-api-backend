// server.js
// where your node app starts

// init project
const express = require("express");
const app = express();
const faker = require("faker");
const cors = require("cors");

// Allow CORS for the API to work on our frontend
app.use(cors());

// serve up static files with express
app.use(express.static("public"));

// setup our route to user.js
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/api/user.js");
});

// setup our GET request to the api/user route
// grab methods from Faker.js faker json object
app.get("/api/user", function(req, res) {
  res.json({
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    bio: faker.lorem.sentence(),
    // image: faker.image.avatar()
  });
});

// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});
