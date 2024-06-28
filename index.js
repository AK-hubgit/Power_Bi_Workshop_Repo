// div sticks right according to mouse scrolled
window.addEventListener("scroll", function () {
  var videoContainer = document.getElementById("videoContainer");
  var videoHeight = document.getElementById("videoHeight");
  var closeButton = document.getElementById("closeButton");
  let show_Button = document.getElementById("show_Button");

  if (window.scrollY > 1100) {
    if (!videoContainer.classList.contains("closed")) {
      videoContainer.classList.add("sticky");
      videoHeight.setAttribute("class", "adjustVidHeight");
      closeButton.style.display = "block";
      show_Button.classList.remove("showButton");
    }
  } else {
    videoContainer.classList.remove("sticky");
    videoHeight.removeAttribute("class", "adjustVidHeight");
    closeButton.style.display = "none";
    show_Button.classList.add("showButton");
  }
});

document.getElementById("closeButton").addEventListener("click", function () {
  var videoContainer = document.getElementById("videoContainer");
  var videoHeight = document.getElementById("videoHeight");
  var closeButton = document.getElementById("closeButton");

  videoContainer.classList.add("closed");
  videoContainer.classList.remove("sticky");
  videoHeight.pause();
  closeButton.style.display = "none";
});

// Time function ( offer ends before tmr midnight )

function updateTime() {
  const timeElement = document.getElementById("dynamic-time");
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + 1);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const futureDate = currentDate.toLocaleDateString(undefined, options);

  timeElement.textContent = futureDate;
}

// Call the function to update the date
updateTime();

// Power_Bi_Intro_looping_ video.mp4
