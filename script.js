var embeddedVideo = document.getElementById('embeddedVideo');

// Prevent default behavior on touchstart event
embeddedVideo.addEventListener('touchstart', function(event) {
    event.preventDefault();
});

window.addEventListener('beforeunload', function(event) {
    // Prevent any new windows from opening
    window.open = function() {
        // Optionally, you can log the attempt to open a popup
        console.log("Popup blocked");
        return null;
    };
});
