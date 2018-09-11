

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');
const should = chai.should();
const Review = require('../models/review');

// simple text
const testSample = {
    "title": "Book of the year",
     "movie-title": "Yveslym, all about my life",
     "description": "talking about me, myself and I"
  }

chai.use(chaiHttp);

describe('Reviews', ()  => {
  // TEST INDEX
  it('should index ALL reviews on / GET', (done) => {
    chai.request(server)

        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html;
          done();
        });
  });
  // TEST SHOW
  it('should show a SINGLE review on /reviews/<id> GET', (done) => {
    var review = new Review(testSample);
    review.save((err, data) => {
      chai.request(server)
        .get(`/reviews/${data._id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.html
          done();
        });
    });
  });

  // TEST NEW
  // TEST CREATE
  // TEST SHOW
  // TEST EDIT
  // TEST UPDATE
  // TEST DELETE
});