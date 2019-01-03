const fs = require('fs');

const base64 = {
    encode: function (file) {
        const bitmap = fs.readFileSync(file);
        return new Buffer(bitmap).toString('base64');
    }
};

module.exports = base64;
