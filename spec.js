var assert = require("assert"),
    objectId = require('./');
    
describe('invalid objectid', function () {
    var id = "invalid";
    
    function nextWithAssert(err) {
        assert.ok(err);
    }
    
    it('calls next with err', function () {
        objectId({}, {}, nextWithAssert, id)
    });
});

describe('valid objectid', function () {
    var id = "545db2f995f271782587a031";
    
    function nextWithAssert(err) {
        assert.equal(err, undefined);
    }

    it('calls next without err', function () {
        objectId({}, {}, nextWithAssert, id);
    });
});
