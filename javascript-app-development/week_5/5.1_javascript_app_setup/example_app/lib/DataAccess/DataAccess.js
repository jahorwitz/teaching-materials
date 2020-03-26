const request = require('request-promise');

module.exports = {
    getPost: (postId) => {
        if (postId) {
            return new Promise((resolve, reject) => {
                request.get(`http://jsonplaceholder.typicode.com/posts/${postId}`, (data) => {
                    resolve(data);
                }, (err) => {
                    reject(err);
                });
            });
        } else {
            throw new Error("postId is required when calling getPost");
        }
    }
}