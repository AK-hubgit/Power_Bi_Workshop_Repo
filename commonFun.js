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