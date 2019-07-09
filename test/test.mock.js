var sinon = require('sinon');
var chai = require('chai');

var User = require('../api/models/user.model');



describe("Get all users", function(){
    // Test will pass if we get all users
   it("should return all users", function(done){
       var UserMock = sinon.mock(User);
       var expectedResult = {status: true};
       UserMock.expects('find').yields(null, expectedResult);
       User.find(function (err, result) {
           UserMock.verify();
           UserMock.restore();
           chai.expect(result.status).to.be.true;
           done();
       });
   });

   // Test will pass if we fail to get a user
   it("should return error", function(done){
       var UserMock = sinon.mock(User);
       var expectedResult = {status: false, error: "Something went wrong"};
       UserMock.expects('find').yields(expectedResult, null);
       User.find(function (err, result) {
           UserMock.verify();
           UserMock.restore();
           chai.expect(err.status).to.be.false;
           done();
       });
   });
});



// Test will pass if the user is saved
describe("Post a new user", function(){
    it("should create new post", function(done){
        var UserMock = sinon.mock(new User({ name: 'mock name', email: 'mock@user.com', age: 19, phone: 987654321}));
        var user = UserMock.object;
        var expectedResult = { status: true, user: [] };
        UserMock.expects('save').yields(null, expectedResult);
        user.save(function (err, result) {
            UserMock.verify();
            UserMock.restore();
            chai.expect(result.status).to.be.true;
            done();
        });
    });
    // Test will pass if the user is not saved
    it("should return error, if post not saved", function(done){
        var UserMock = sinon.mock(new User());
        var user = UserMock.object;
        
        var expectedResult = { status: false };
        UserMock.expects('save').yields(expectedResult, null);
        user.save(function (err, result) {
            UserMock.verify();
            UserMock.restore();
            chai.expect(err.status).to.not.be.true;
            done();
        });
    });
});