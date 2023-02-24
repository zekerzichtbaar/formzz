'use strict';
const contentTypeForm = require('./form/schema.json');
const contentTypeFormSubmission = require('./form-submission/schema.json');

module.exports = {
    'form': { schema: contentTypeForm },
    'form-submission': { schema: contentTypeFormSubmission },
};
