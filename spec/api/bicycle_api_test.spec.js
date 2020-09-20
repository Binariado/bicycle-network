const Bicycle = require('../../models/bicycle');
const request = require('request');

const server = require('../../bin/www');

const localhost = 'http://localhost:3000/api';

beforeEach(() => { Bicycle.allBicycle = []; });

describe('Bicycle Api',() => {
  describe('GET Bicycle /',() => {
    it('Status 200', () => {
      expect(Bicycle.allBicycle.length).toBe(0);

      const a = new Bicycle(1, 'red', 'veloz', [10.982342, -74.836292]);
      Bicycle.add(a);

      request.get(`${localhost}/bicycles`, (error, response, body) => {
        expect(response.statusCode).toBe(200);
      })

    });
  });

  describe('Post Bicycle /create',() => {
    it('Status 200', (done) => {
      expect(Bicycle.allBicycle.length).toBe(0);

      const headers = {"content-type": "application/json"};
      const bicy = '{ "id": 20, "color": "red", "model": "veloz", "lat": 132, "lng": -332  }';

      request.post({
        headers: headers,
        url: `${localhost}/bicycles/create`,
        body: bicy
      }, (error, response, body) => {
        expect(response.statusCode).toBe(201);
        expect(Bicycle.findById(20).color).toBe("red")
        done();
      })

    });
  });

  describe('GET Bicycle /delete', () => {
    it('Status 200', (done) => {
      expect(Bicycle.allBicycle.length).toBe(0);

      const a = new Bicycle(18, 'red', 'veloz', [10.982342, -74.836292]);
      Bicycle.add(a);

      const bicy = '{ "id": 18, "red": "red", "model": "veloz", "lat": 10.982342, "lng": -74.836292  }';

      const headers = { "content-type": "application/json" };

      request.delete({
        headers: headers,
        url: `${localhost}/bicycles/delete`,
        body: bicy
      }, (error, response, body) => {
        expect(response.statusCode).toBe(204);
        done();
      });
    });
  });

});