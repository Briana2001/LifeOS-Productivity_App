// Task Model
// {
//   id: "t_1728212400000",
//   title: "Study Data Structures",
//   category: "Study",           // free text, whatever you type
//   priority: "high",            // "high" | "medium" | "low"
//   duration: 60,                // minutes
//   completed: false,
//   createdAt: "2025-10-06T09:00:00.000Z"
// }


// Habit Model
// {
//   id: "h_1728212400000",
//   name: "Study",
//   emoji: "🔥",
//   streak: 12,
//   completedDates: [             // which days you did it
//     "2025-09-24",
//     "2025-09-25",
//     "2025-09-26"
//   ]
// }

// Goal Model
// {
//   id: "g_1728212400000",
//   title: "Finish LifeOS V1",
//   description: "Ship the full dashboard",
//   targetDate: "2025-10-20",
//   progress: 40,                 // 0–100
//   createdAt: "2025-10-06T09:00:00.000Z"
// }

// Storage Keys
// lifeos.tasks    → array of task objects
// lifeos.goals    → array of goal objects
// lifeos.habits   → array of habit objects
// lifeos.quote    → today's quote (already done)



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

const quotes = [
  { text: "Small steps still move you forward." },
  { text: "Discipline will take you where motivation cannot." },
  { text: "Start before you feel ready." },
  { text: "Your future is built by what you do today." },
  { text: "Progress, not perfection." },
  { text: "Do it tired. Do it scared. Keep moving." },
  { text: "You don't need more time. You need better priorities." },
  { text: "Consistency turns effort into results." },
  { text: "One focused hour can change your whole day." },
  { text: "Stop waiting for the perfect moment." },
  { text: "Make today count." },
  { text: "Your goals need action, not wishes." },
  { text: "A bad day doesn't have to become a bad week." },
  { text: "Keep going. You're closer than you think." },
  { text: "Do the hard thing first." },
  { text: "You can restart the day at any moment." },
  { text: "Future you is watching." },
  { text: "Protect your time like it matters—because it does." },
  { text: "Less scrolling. More building." },
  { text: "Don't negotiate with the task. Just start." },
  { text: "Momentum begins with one decision." },
  { text: "Your habits are quietly building your life." },
  { text: "Focus on what you can control today." },
  { text: "You don't have to do everything. Do what matters." },
  { text: "Done is better than endlessly preparing." },
  { text: "Make progress your daily standard." },
  { text: "The life you want requires the habits you avoid." },
  { text: "Don't let a slow day convince you to quit." },
  { text: "Every disciplined day is a vote for your future." },
  { text: "Your excuses won't build your dreams." },
  { text: "Keep promises you make to yourself." },
  { text: "Dream big. Work quietly." },
  { text: "You have today. Use it well." },
  { text: "Build the life you keep imagining." },
  { text: "When motivation disappears, let discipline speak." },
  { text: "A little progress every day adds up." },
  { text: "You don't need to feel motivated to begin." },
  { text: "Choose progress over comfort." },
  { text: "Your time is your life. Spend it intentionally." },
  { text: "Optimize your life, one day at a time." },
  { text: "Clarity comes from taking action." },
  { text: "Don't confuse being busy with moving forward." },
  { text: "Your priorities deserve your best hours." },
  { text: "Start small. Stay consistent." },
  { text: "What you repeat becomes who you become." },
  { text: "Make room for what actually matters." },
  { text: "You can't change yesterday. You can use today." },
  { text: "Build systems that make your goals easier to reach." },
  { text: "Your life changes when your daily choices change." },
  { text: "Life doesn't optimize itself. You do." }
];


function getDailyQuote() {
  const today = new Date().toISOString().slice(0, 10);
  const stored = localStorage.getItem("lifeos.quote");

  if (stored) {
    const saved = JSON.parse(stored);
    if (saved.date === today) {
      return saved;
    }
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const picked = quotes[randomIndex];

  const toSave = {
    date: today,
    text: picked.text,
    author: picked.author,
  };

  localStorage.setItem("lifeos.quote", JSON.stringify(toSave));
  return toSave;
}


