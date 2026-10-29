const userName = "Briana";
// ============================================
// STEP 1 — Greeting + Date
// ============================================


const now = new Date();


const hour = now.getHours();


let greeting;
if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}


const dateString = now.toLocaleDateString("en-GB", {
  weekday: "long",  
  day: "numeric",   
  month: "long",     
});


const greetingEl = document.querySelector("#greeting");
const dateEl     = document.querySelector("#date");


greetingEl.textContent = `${greeting} Briana🖤✨`;
dateEl.textContent     = dateString;