var embeddedVideo = document.getElementById('embeddedVideo');

// Prevent default behavior on touchstart event
embeddedVideo.addEventListener('touchstart', function(event) {
    event.preventDefault();
});