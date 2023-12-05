
function openPopup1() {
    var popup = document.getElementById("myPopup1");
    popup.style.display = "block";
}

function openPopup2() {
    var popup = document.getElementById("myPopup2");
    popup.style.display = "block";
}
function openPopup3() {
    var popup = document.getElementById("myPopup3");
    popup.style.display = "block";
}

function openPopup4() {
    var popup = document.getElementById("myPopup4");
    popup.style.display = "block";
}

function openPopup5() {
    var popup = document.getElementById("myPopup5");
    popup.style.display = "block";
}

function openPopup6() {
    var popup = document.getElementById("myPopup6");
    popup.style.display = "block";
}



// closing function


document.getElementById("closePopup1").addEventListener("click", function() {
    var popup = document.getElementById("myPopup1");
    popup.style.display = "none";
});


document.getElementById("closePopup2").addEventListener("click", function() {
    var popup = document.getElementById("myPopup2");
    popup.style.display = "none";
});

document.getElementById("closePopup3").addEventListener("click", function() {
    var popup = document.getElementById("myPopup3");
    popup.style.display = "none";
});
document.getElementById("closePopup4").addEventListener("click", function() {
    var popup = document.getElementById("myPopup4");
    popup.style.display = "none";
});
document.getElementById("closePopup5").addEventListener("click", function() {
    var popup = document.getElementById("myPopup5");
    popup.style.display = "none";
});
document.getElementById("closePopup6").addEventListener("click", function() {
    var popup = document.getElementById("myPopup6");
    popup.style.display = "none";
});



//speaker//
document.addEventListener("DOMContentLoaded", function() {
    var music = document.getElementById("music");
    var playButton = document.getElementById("playButton");
  
    playButton.addEventListener("click", function() {
      if (music.paused) {
        music.play();
        playButton.src = "speakerplaying.png";
      } else {
        music.pause();
        playButton.src = "speaker.png";
      }
    });
  });
  
  