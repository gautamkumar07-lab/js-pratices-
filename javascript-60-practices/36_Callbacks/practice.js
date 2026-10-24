// Topic: Callbacks (Synchronous vs Asynchronous)

// 1. Synchronous callback execution
console.log("Before sync callback");
[1, 2, 3].forEach(item => {
  console.log("Sync item:", item);
});
console.log("After sync callback");

// 2. Asynchronous callback simulation
function downloadFile(url, onComplete) {
  console.log(`Starting download from ${url}...`);
  setTimeout(() => {
    onComplete(null, { size: "2.4MB", status: 200 });
  }, 100);
}

downloadFile("https://cdn.example.com/bundle.js", (err, file) => {
  if (err) return console.error(err);
  console.log("Download finished via async callback:", file);
});
