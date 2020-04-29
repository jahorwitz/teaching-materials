// Create a single object named "slideshow" that represents the data
// and functionality of a picture slideshow. There should be NO VARIABLES
// OUTSIDE THE OBJECT. The object should have properties for:

//     1) An array called photoList that contains the names of the photos as strings
//     2) An integer currentPhotoIndex that represents which photo
//         in the photoList is currently displayed
//     3) A nextPhoto() function that moves currentPhotoIndex to the next index
//         if there is one, and logs the current photo name. If there is no next
//         photo, log "End of slideshow"
//     4) A prevPhoto() function that does the same thing, but backwards.
//     5) A function getCurrentPhoto() that returns the current photo from the list.

let slideshow = {
    photoList: ["cat", "dog", "horse", "ocean", "woods"],
    currentPhotoIndex: 0,
    nextPhoto: function () {
        if (this.currentPhotoIndex === this.photoList.length - 1) {
            console.log("end of slideshow");
        } else {
            this.currentPhotoIndex;
        }
    },
    prevPhoto: function () {

    },
    getCurrentPhoto: function () {

    }
}

