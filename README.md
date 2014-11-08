Usage
==========

    var objectId = require('express-param-objectid');

    router.param('id', objectId);
    router.param('id', function (req, res, next, id) {
        // id is a valid objectId
    });
