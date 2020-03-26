const moment = require('moment');

module.exports = {
    getTime: () => {
        return moment().format("h:mm:ss a");
    }
}