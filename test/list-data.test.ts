import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../src/app';

chai.use(chaiHttp);
const expect = chai.expect;

describe('GET api/v1/list', () => {

  it('responds with JSON array', () => {
    return chai.request(app).get('/api/v1/list')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('array');
        expect(res.body).to.have.length(5);
      });
  });

  it('should include creamer', () => {
    return chai.request(app).get('/api/v1/list')
      .then(res => {
        let Creamer = res.body.find(item => item.name === 'Creamer');
        expect(Creamer).to.exist;
        expect(Creamer).to.have.all.keys([
          'id',
          'name',
          'price',
          'qty'          
        ]);
      });
  });

});