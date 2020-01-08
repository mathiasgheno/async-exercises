const {
    getGithubAccountByUserNamePromise,
    getGithubAccountByUserNameCallback
} = require('./github/api');


/**
 * Your final result must be an array with the result of ndnzingano and Mathias54's account request result.
 * For that you should use array methods (map, forEach) or loop operators (for).
 */

describe('getGithubAccountByUserName', () => {
    let accounts = [];
    let usersNames = ['Mathias54', 'ndnzingano'];

    describe('with callback', () => {
        beforeEach((done) => {
            /**
             * Your code here.
             * */
        });

        it('variable accounts in the position 0 must contains the property login equal to ndnzingano', () => {

        });

        it('variable accounts in the position 1 must contains the property login equal to Mathias54', () => {

        });
    });

    describe('with Promise', () => {
        beforeEach((done) => {
            /**
             * Your code here.
             * */
        });

        it('variable accounts in the position 0 must contains the property login equal to ndnzingano', () => {

        });

        it('variable accounts in the position 1 must contains the property login equal to Mathias54', () => {

        });
    });

    describe('with Async / Await', () => {
        beforeEach((done) => {
            /**
             * Your code here.
             * */
        });

        it('variable accounts in the position 0 must contains the property login equal to ndnzingano', () => {

        });

        it('variable accounts in the position 1 must contains the property login equal to Mathias54', () => {

        });
    })
});
