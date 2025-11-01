// Define fixed blocks
const breakfast = "Breakfast";
const aftercare = "Aftercare";

// Activities pool (ECD/Kinder activities)
const activities = [
  "Circle Time",
  "Storytelling",
  "Creative Arts & Crafts",
  "Music & Movement",
  "Outdoor Play",
  "Building Blocks & Puzzles",
  "Science Exploration",
  "Free Play",
  "Dramatic Play",
  "Sensory Activities",
  "Math & Counting Games",
  "Nap/Quiet Time",
  "Language & Phonics"
];

// Function to shuffle activities randomly
function getRandomActivities(num) {
  // shuffle a copy so we don't mutate the original activities array
  const copy = activities.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, num);
}

// Function to build timetable for one class
function generateTimetable() {
  let timetable = [];

  // Breakfast
  timetable.push(["06:00 - 07:00", breakfast]);

  // Learning blocks between 07:00 and 14:00 (7 slots of 1 hour each)
  let slots = [
    "07:00 - 08:00",
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00"
  ];
  let randomActs = getRandomActivities(slots.length);
  for (let i = 0; i < slots.length; i++) {
    timetable.push([slots[i], randomActs[i]]);
  }

  // Aftercare (14:00 - 17:30)
  timetable.push(["14:00 - 17:30", aftercare]);

  return timetable;
}

// Show timetable in HTML
function showTimetable(classNum) {
  let timetable = generateTimetable(); // generate fresh for each click
  let html = `<h3>Class ${classNum} Daily Timetable</h3>
              <table>
                <tr><th>Time</th><th>Activity</th></tr>`;

  timetable.forEach(row => {
    html += `<tr>
               <td>${row[0]}</td>
               <td>${row[1]}</td>
             </tr>`;
  });

  html += "</table>";
  document.getElementById("timetable").innerHTML = html;
}

// expose function for inline onclick handlers used in HTML
window.showTimetable = showTimetable;
