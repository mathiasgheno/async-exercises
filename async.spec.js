const getMathias54WithCallback = require('./superagent/superagent');
const getMathias54WithPromise = require('./axios/axios');

/**
 * getMathias54WithCallback returns an function, the first parameter is a callback.
 * The first parameter of the callback is one object which represents if a error occured.
 * The secund parameter of the callback is one object which represents the body of the request.
 *
 * getMathias54WithPromise return a function which return a Promise. .then represents the success and .catch the error.
 */

describe('getMathias54', () => {
    describe('with callback', () => {
        it('should return an object with property id equal to 14915619', (done) => {

        });
    });

    describe('with promise', () => {
        it('should return an object with property company equal to DBServer', (done) => {

        });
    });

    describe('with async / await ', () => {
        it('should return an object with property email equal to null', async () => {

        });
    });
});