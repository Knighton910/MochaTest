var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:3000");


describe("unit test",function(){

  it("should return 200",function(done){
    server
    .get('/')
    .expect(200)
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  })

  it('should show, I got class', function(done) {
    server.get('/class')
    done()
  })

});
