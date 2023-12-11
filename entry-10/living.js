
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


//light
const toggleButton = document.getElementById('toggleButton');
let isDarkMode = false;

toggleButton.addEventListener('click', function() {
  isDarkMode = !isDarkMode; // Toggle the boolean value

  if (isDarkMode) {
    document.body.classList.add('dark-mode'); // Add the dark-mode class
  } else {
    document.body.classList.remove('dark-mode'); // Remove the dark-mode class
  }
});

