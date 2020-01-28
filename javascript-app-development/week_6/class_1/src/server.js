const express = require('express');
const app = express();
const port = 3000;
const SocialMediaDataService = require('./services/socialMediaDataService');

app.get('/posts', async function (req, res) {
    const dataService = new SocialMediaDataService();
    try {
        await dataService.getPosts();
        const postTitles = dataService.getPostTitles();

        if(!postTitles || postTitles.length === 0) {
            res.status(204).send("No content recieved");
        } else {
            res.json(postTitles);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Uh-oh, we threw an error");
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));