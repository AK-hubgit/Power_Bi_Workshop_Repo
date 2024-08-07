// Get the button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Add an event listener to the window for scroll events
window.onscroll = function () {
  toggleScrollToTopBtn();
};

function toggleScrollToTopBtn() {
  // Check the scroll position
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}

function scrollToTop() {
  // Scroll to the top smoothly
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// div sticks right according to mouse scrolled
window.addEventListener("scroll", function () {
  let videoContainer = document.getElementById("videoContainer");
  let videoHeight = document.getElementById("videoHeight");
  let closeButton = document.getElementById("closeButton");
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
  let videoContainer = document.getElementById("videoContainer");
  let videoHeight = document.getElementById("videoHeight");
  let closeButton = document.getElementById("closeButton");
  let playButton = document.getElementById("playButton");

  videoContainer.classList.add("closed");
  videoContainer.classList.remove("sticky");
  videoHeight.pause();
  closeButton.style.display = "none";
  playButton.style.display = "block";
});

// video play button
document.getElementById("playButton").addEventListener("click", function () {
  let video = document.getElementById("videoHeight");
  let playButton = document.getElementById("playButton");
  video.play();
  console.log("closed");
  playButton.style.display = "none";
});

/* // Time function ( offer ends before tmr midnight )

function updateTime() {
  const timeElement = document.getElementById("dynamic-time");
  const currentDate = new Date();

  currentDate.setDate(currentDate.getDate() + 1);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const futureDate = currentDate.toLocaleDateString(undefined, options);

  timeElement.textContent = futureDate;
}
// Call the function to update the date
updateTime(); */

// google scripts
function handleClick() {
  google.script.run.isClicked();
}

// submitChecked
document.getElementById("submitChecked").addEventListener("click", function () {
  let button = document.getElementById("submitChecked");
  let message = document.getElementById("submissionMessage");
  console.log("click");

  // Hide the button and show the message
  button.style.display = "none";
  message.style.display = "block";

  // Set a timeout to revert back to the original state
  setTimeout(function () {
    message.style.display = "none";
    button.style.display = "inline-block";
    // button.style.display = 'block';
  }, 1500); // 3 seconds delay

  /*
  const element = document.getElementsByTagName("input")[0];
  const attr = element.getAttributeNode("type");

  if(attr !== "checked"){
    element.removeAttributeNode(attr);
    console.log("click");
  } 
  */
  /* 
    const inputs = document.getElementsByTagName("input")
    if (inputs.hasAttribute("type")) {
      inputs.setAttribute("type", "");
    } */
});

const redirectTo = () => {
  window.location.href = "SubmitAnswers.html";
  console.log("clicked");
};
