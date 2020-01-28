// API URL: http://jsonplaceholder.typicode.com/

const axios = require("axios");

class SocialMediaDataService {

    constructor() {
        this.posts = [];
    }

    async getPosts() {
        const response = await axios.get("http://jsonplaceholder.typicode.com/posts");
        this.posts = response.data;
    }

    getPostTitles() {
        const posts = this.posts;
        return posts.map(function (item) {
            return item.title;
        })
    }
}

module.exports = SocialMediaDataService;