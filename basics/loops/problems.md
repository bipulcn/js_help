Problem 1: The Event Listener Trap (Scope & Closures)

The Scenario: You are building an admin panel with three "Delete User" buttons. When an admin clicks any button, an API call should trigger with that specific user's ID. However, testing shows that clicking any of the three buttons always deletes the last user in the database.

The Code:

JavaScript
for (var i = 1; i <= 3; i++) {
  document.getElementById("btn-" + i).addEventListener("click", function() {
    console.log("Deleting User ID: " + i);
  });
}
The Challenge: Ask the student to explain why the console always prints "Deleting User ID: 4" regardless of which button is clicked. Then, ask them to fix the bug by changing a single keyword in the loop declaration. (Learning outcome: var is function-scoped and creates stale closures in loops, whereas let is block-scoped and binds a new value per iteration).



2. The Scenario: A web application processes a large batch of local data. The developer wrote a loop to process items until a specific target is found. However, when QA tests the app with a dataset that doesn't contain the target, the entire browser tab freezes and eventually crashes.

The Code:

JavaScript
let queue = ["task1", "task2", "task3", "task4"];
let index = 0;
let foundTarget = false;

while (!foundTarget) {
    if (queue[index] === "urgent_task") {
        console.log("Urgent task found!");
        foundTarget = true;
    }
    index++;
}
The Challenge: Ask the student to identify exactly why the browser crashes if "urgent_task" is missing from the array. Have them fix the condition in the while loop so it stops gracefully if it reaches the end of the queue without finding the target. (Learning outcome: Understanding exit conditions and guarding against infinite loops).


3. The Scenario: You are building a pagination component for a data table displaying 50 users, with 10 users per page. The math correctly calculates that there should be 5 pages. However, the UI only renders buttons for Pages 1, 2, 3, and 4. Page 5 is missing.

The Code:

JavaScript
const totalUsers = 50;
const usersPerPage = 10;
const totalPages = totalUsers / usersPerPage; // Equals 5

// Generating pagination buttons
for (let page = 1; page < totalPages; page++) {
    console.log(`Creating button for Page ${page}`);
}
The Challenge: Ask the student to spot the logic flaw in the for loop's condition and correct it. Then, ask them how they would change the loop initialization if the API required page requests to be zero-indexed (Pages 0 through 4) instead of one-indexed. (Learning outcome: Mastering loop boundaries, strict vs. non-strict inequalities, and zero-based indexing).


4. The Scenario: A dashboard uploads a video and checks its processing status. The developer used a do...while loop to poll the status. However, the server sometimes finishes processing instantly, returning "COMPLETE" on the very first upload response. The current logic forces an unnecessary extra network request even when the video is already done.

The Code:

JavaScript
let videoStatus = "COMPLETE"; // Assume this came from the initial upload response

do {
    console.log("Pinging server: Checking video status...");
    // Simulated network request that updates videoStatus
    // videoStatus = fetchStatus(); 
} while (videoStatus !== "COMPLETE");

console.log("Video is ready for playback!");
The Challenge: Ask the student to explain why the console logs "Pinging server..." even though the status is already "COMPLETE". Have them rewrite the logic using a standard while loop to ensure that if the status is already complete, zero additional pings are sent. (Learning outcome: Understanding execution flow differences—do...while runs first, while evaluates first).