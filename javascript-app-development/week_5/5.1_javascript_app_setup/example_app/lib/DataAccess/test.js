// sinon is a package that lets us create "stubs"- mock functions
// that run in the place of other libary functions. We will use this
// to "mock" the API call to the json placeholder API in order to control
// what data we receive from the endpoint.
const sinon = require('sinon');

// chai is a higher level assertion framework that gives us a more natural feeling
// way to assert on conditions. 'expect' and 'should' are both modules within the
// chai package.
const { expect, should } = require('chai');

const request = require('request-promise');
const service = require('./DataAccess');

// Describe a module
describe('DataAccess', () => {

    // Describe a function within / exported by that module
    describe('#getPost()', () => {

        // beforeEach is run before each 'it' or 'describe' scenario within a describe block.
        // It is mainly used to set up mock functions that will be used within the test cases.
        beforeEach(() => {
            // This creates a stub method that will be executed in place of the
            // 'get' method on the request-promise package
            this.requestStub = sinon.stub(request, 'get');
        });

        // afterEach is run after each 'it' or 'describe' scenario within a describe block.
        // it is mainly used for cleanup procedures between test cases.
        afterEach(() => {
            request.get.restore();
        });

        // This is our first test case- the happy path. We should be able to call our module's
        // function with well-formed data and receieve an appropriate response. Notice that
        // 1) we are providing a mock object as data that the API would return (we are not really
        //      making a call to the real API) so that our test is completely isolated.
        // 2) we are formatting our test case using the Triple 'A' (AAA) pattern- Arrange, Act, Assert.
        //      We arrange all our mock data, mock functions, etc at the beginning, then we execute the code,
        //      then we make our assertions on the result. This pattern is a standard for unit tests in production
        //      code.
        it('should make a request when given a postId', async () => {
            // 1) Arrange
            let expected = {
                "userId": 1,
                "id": 1,
                "title": "some title",
                "body": "some body"
            };
            this.requestStub.yields(expected);

            // 2) Act
            let result = await service.getPost(1);

            // 3) Assert
            expect(this.requestStub.calledWith("http://jsonplaceholder.typicode.com/posts/1")).to.equal(true);
            expect(result).to.not.equal(null);
            expect(result).to.deep.equal(expected);
        });

        // For our next test case, we want to ensure that our validation on the input parameters correctly
        // throws an error if we call the function without the proper parameters. We should catch an error
        // when the function runs and then we can make assertions on that error. If we do not receive an
        // error, then the test should fail.
        it('should throw an error when a postId does not exist', async () => {
            // 1) Arrange
            let expected = "postId is required when calling getPost";

            // 2) Act
            try {
                await service.getPost();
                // Should catch err before reaching this assertion
                should.fail();
            } catch (err) {
                // 3) Assert
                expect(err).to.not.equal(null);
                expect(err.message).to.equal(expected);
            }
        });

        // Lastly, we have tested our own code, now we want to ensure that our code
        // handles any errors from external sources. This test case shows that our function
        // returns a (rejected) promise that will throw an error when the API refuses our connection
        // request. This can happen when the API is down for maintenance or when our API key is
        // expired / invalid and we should ensure that our code handles that error gracefully.
        it('should reject when error is received from API', async () => {
            // 1) Arrange
            let expected = "Connection to API refused";
            this.requestStub.throws(new Error(expected));

            // 2) Act
            try {
                await service.getPost(1);
                // Should catch err before reaching this assertion
                should.fail();
            } catch (err) {
                // 3) Assert
                expect(err).to.not.equal(null);
                expect(err.message).to.equal(expected);
                expect(this.requestStub.calledWith("http://jsonplaceholder.typicode.com/posts/1")).to.equal(true);
            }
        });
    });
});