var objectId = require('valid-objectid'),
    httpErrors = require('http-errors');

module.exports = function (req, res, next, param) {
    if (objectId.isValid(param)) {
        next();
    } else {
        next(httpErrors.BadRequest(param + ' is not a valid id'));
    }
};
