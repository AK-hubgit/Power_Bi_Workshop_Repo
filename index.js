// div sticks right according to mouse scrolled
window.addEventListener("scroll", function () {
  let videoContainer = document.getElementById("videoContainer");
  let videoHeight = document.getElementById("videoHeight");
  let show_Button = document.getElementById("show_Button");
  if (window.scrollY > 1110) {
    // Adjust this value as needed
    videoContainer.classList.add("sticky");
    videoHeight.setAttribute("class", "adjustVidHeight");
    show_Button.classList.remove("showButton");
  } else {
    videoContainer.classList.remove("sticky");
    videoHeight.removeAttribute("class", "adjustVidHeight");
    show_Button.classList.add("showButton");
  }
});

// close video button
document.getElementById("closeBtn").addEventListener("click", function () {
  let videoContainer = document.getElementById("videoContainer");

  videoContainer.classList.remove("sticky");
  videoHeight.removeAttribute("class", "adjustVidHeight");
  show_Button.classList.add("showButton");
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

