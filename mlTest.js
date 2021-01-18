var video = document.querySelector("#videoElement");
var stopVideo = document.querySelector("#stop");

console.log("I have started");
$(document).ready(function(){
    console.log("I am FLYING!!");
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            video.srcObject = stream;
        })
        .catch(function (err0r) {
            console.log("Something went wrong!");
        });
    }
});

stopVideo.addEventListener("click", stop, false);

function stop(e) {
    console.log("video stop function called");
    var stream = video.srcObject;
    var tracks = stream.getTracks();

    for (var i = 0; i < tracks.length; i++) {
    var track = tracks[i];
    track.stop();
    }

    video.srcObject = null;
}