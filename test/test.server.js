// // Import the dependencies for testing
// var chai = require('chai');
// var chaiHttp = require('chai-http');
// var app = require('../app');
// // Configure chai
// chai.use(chaiHttp);
// chai.should();
// describe("Users", () => {
//     describe("GET /", () => {
        // Test to get all users record
        // it("should get all users record", (done) => {
        //      chai.request('http://localhost:10010')
        //          .get('/users')
        //          .end((err, res) => {
        //              res.should.have.status(200);
        //             //  chai.expect(res).to.be.a('Array')
        //             res.body.should.be.a('Array');
        //              done();
        //           });
        //  });
        // // Test to get single user record
        // it("should get a single user record", (done) => {
        //      const id = '5d19864b71c1dd01c823d1f0';
        //      chai.request('http://localhost:10010')
        //          .get(`/users/${id}`)
        //          .end((err, res) => {
        //              res.should.have.status(200);
        //              res.body.should.be.a('object');
        //              done();
        //           });
        //  });
         
//         // Test to get single user record
//         it("should not get a single user record", (done) => {
//              const id = 5;
//              chai.request('http://localhost:10010')
//                  .get(`/users/${id}`)
//                  .end((err, res) => {
//                      res.should.have.status(500);
//                      done();
//                   });
//          });

//          it('should send parameters to Post', function(done) {
//             chai
//                 .request('http://localhost:10010')
//                 .post('/users')
//                 .set('Content-Type', "application/json; charset=utf-8")
//                 .set('Accept', 'application/json')
//                 .send({'name': 'tvvvryyyyyQQQQQyyyght', 'age': 12,'email': "teeyWWWWyyyyytttttttttyyyeeest@est.com", 'phone': 675676767})
//                 .end(function(error, response) {
//                     if (error) {
//                         done(error);
//                     } else {
//                         response.should.have.status(200);
//                         done();
//                     }
//                 });
//         });
//     });
// });


// var supertest = require("supertest");
// var should = require("should");

// // This agent refers to PORT where program is runninng.

// var server = supertest.agent("http://localhost:10010");

// // UNIT test begin

// describe("SAMPLE unit test",function(){

//   // #1 should return home page

//   it("should return users",function(done){

//     // calling home page api
//     server
//     .get("/users")
//     .expect("Content-type",/json/)
//     .expect(200) // THis is HTTP response
//     .end(function(err,res){
//       // HTTP status should be 200
//       res.status.should.be.equal(200)
//       // Error key should be false.
//     //   res.body.error.should.equal(false);
//       done();
//     });
//   });

// });