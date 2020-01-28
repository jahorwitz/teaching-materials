const jest = require("jest");

let mockPosts = {
    data: []
};

jest.mock("axios", () => {
    return {
        get: jest.fn(() => {
            return mockPosts;
        })
    };
});

const SocialMediaDataService = require("../socialMediaDataService");
const testService = new SocialMediaDataService();


describe("SocialMediaDataService", function () {

    beforeEach(() => {
        getMockFunction.mockClear();
    });

    it("should get posts", async () => {
        mockPosts = {
            data: [{
                title: "some fake post"
            }]
        };
        const response = await testService.getPosts();

        expect(response).not.toBeNull();
        expect(response).toEqual(mockPosts);
        expect(getMockFunction).toHaveBeenCalledTimes(1);
    });

});