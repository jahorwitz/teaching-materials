// Create an empty property named playInterval
// A play() function that moves to the next photo ever 2000ms until the end.
//     Tip - use playInterval = setTimeout(fn,ms).
// A pause() function that stops the slideshow
//     Tip - use clearInterval(playInterval)
// Automatically pause the slideshow if it gets to the end of the photolist while playing.

let slideshow = {
        photoList: ['birds', 'puppies', 'rainbows', 'kittens', 'babies'],
    
        currentPhotoIndex: 0,
    
        nextPhoto: function() {
            if(this.currentPhotoIndex < this.photoList.length - 1) {
                this.currentPhotoIndex++;
                console.log('currentPhoto is: '+ this.photoList[this.currentPhotoIndex]);
            } else {
                console.log('End of Slideshow');
                  this.pause();
            }
        },
    
        prevPhoto: function() {
            if(this.currentPhotoIndex > 0) {
                this.currentPhotoIndex--;
                console.log('currentPhoto is: ' + this.photoList[this.currentPhotoIndex]);
            } else {
                console.log('Start of Slideshow');
                
            }
        },
    
        getCurrentPhoto: function() {
            return this.photoList[this.currentPhotoIndex];  
        }
    
    }