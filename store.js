// ============================================
// LIFEOS STORE
// Shared data layer for all pages.
// ============================================

const KEYS = {
  tasks:  "lifeos.tasks",
  goals:  "lifeos.goals",
  habits: "lifeos.habits",
};

// Read any list from localStorage. Always returns an array.
function readList(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return [];
  return JSON.parse(raw);
}

// Write any list to localStorage.
function writeList(key, list) {
  localStorage.setItem(key, JSON.stringify(list));
}

// Generate a unique id. Prefix differs per type.
function makeId(prefix) {
  return `${prefix}_${Date.now()}`;
}



// ---------- TASKS ----------

function getTasks() {
  return readList(KEYS.tasks);
}

function saveTasks(tasks) {
  writeList(KEYS.tasks, tasks);
}

function addTask({ title, category = "General", priority = "medium", duration = 30 }) {
  const task = {
    id: makeId("t"),
    title,
    category,
    priority,
    duration,
    completed: false,
    createdAt: new Date().toISOString(),
  };

  const tasks = getTasks();
  tasks.push(task);
  saveTasks(tasks);

  return task;
}

function updateTask(id, changes) {
  const tasks = getTasks();
  const index = tasks.findIndex(t => t.id === id);
  if (index === -1) return null;

  tasks[index] = { ...tasks[index], ...changes };
  saveTasks(tasks);

  return tasks[index];
}

function deleteTask(id) {
  const tasks = getTasks().filter(t => t.id !== id);
  saveTasks(tasks);
}