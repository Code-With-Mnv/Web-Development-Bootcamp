const fs = require("fs");

fs.writeFile("Lesson2.txt", "Hello, Node.js!", (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File written successfully!");
  }
});

// shows that unlike vanilla JS, Node.js has access to the file system
// to write files, read files, etc.

fs.readFile("Lesson2A.txt", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
  } else {
    console.log("File content:", data.toString());
  }
});
