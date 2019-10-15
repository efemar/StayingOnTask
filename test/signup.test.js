// var chai = require("chai");
// var chaiHttp = require("chai-http");
// var server = require("../server");
// var db = require("../models");
// var expect = chai.expect;

// // Setting up the chai http plugin
// chai.use(chaiHttp);

// var request;

// describe("Post /api/signup", function() {
//   // Before each test begins, create a new request server for testing
//   // & delete all examples from the db
//   beforeEach(function() {
//     request = chai.request(server);
//     return db.sequelize.sync({ force: true });
//   });

//   it("should give corresponding status", function(done) {
//     // Add some examples to the db to test with

//     // Request the route that returns all examples
//     request
//       .post("/api/signup", { userName: "Sunny", password: "Sunny" })
//       .end(function(err, res) {
//         var responseStatus = res.status;

//         // Run assertions on the response

//         expect(err).to.be.null;

//         expect(responseStatus).to.equal(401);

//         // The `done` function is used to end any asynchronous tests
//         done();
//       });
//   });
// });
