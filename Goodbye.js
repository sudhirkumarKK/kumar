(function (window) {
    
  // See Lecture 52, part 1
    var byeSpeaker = {};
  
  // DO NOT attach the speakWord variable to the 'byeSpeaker' object.
    var speakWord = "Good Bye";
  
  
  // See Lecture 52, part 2
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
  // Expose the 'byeSpeaker' object to the global scope. Name it
  // 'byeSpeaker' on the global scope as well.
    window.byeSpeaker = byeSpeaker;
  
  })(window);