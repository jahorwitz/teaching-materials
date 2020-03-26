const dataAccess = require('./lib/DataAccess/DataAccess');
const timeStamp = require('./lib/TimeStamp/TimeStamp');

async function logResponse(resp) {
    console.log(resp, timeStamp.getTime());
}

setInterval(async () => {
    try {
        logResponse(await dataAccess.getPost(1));
    } catch (err) {
        console.log(err);
    }
}, 3000);