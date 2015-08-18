var sinon = require('sinon');

describe('char tests', function () {
    var personStub;
    var char;
    var gettypestub;

    beforeEach(function () {
        personStub = require('./Person')({type: 'restify'});
        gettypestub = sinon.spy(personStub, "getType");
        char = require('./char');
    });

    afterEach(function () {

    });

    describe('when getAppType is called', function () {
        it('should call Person\'s getType method', function () {
            char.getAppType();
            sinon.assert.calledOnce(gettypestub);
        });
    });

})