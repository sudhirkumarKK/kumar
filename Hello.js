(function (window) {
    // Wrap the entire contents of SpeakHello.js inside of an IIFE
  var helloSpeaker = {};
  
    var speakWord = "Hello";
  
  // Rewrite the 'speak' function such that it is attached to the
  // helloSpeaker object instead of being a standalone function.
  
    helloSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
  // STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
  // 'helloSpeaker' on the global scope as well.
  
    window.helloSpeaker = helloSpeaker;
  
  })(window);