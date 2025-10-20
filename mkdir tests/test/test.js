// Simple tests for our website
const fs = require("fs");
const path = require("path");
  
// Test 1: Check if index.html exists
function testIndexExists() {
  const indexPath = path.join(__dirname, "..", "index.html");

  if (fs.existsSync(indexPath)) {
    console.log("✅ PASS: index.html exists");
    return true;
  } else {
    console.log("❌ FAIL: index.html not found");
    return false;
  }
}

// Test 2: Check if HTML contains required elements
function testHTMLContent() {
  const indexPath = path.join(__dirname, "..", "index.html");
  const content = fs.readFileSync(indexPath, "utf8");

  const tests = [
    { name: "Has DOCTYPE", check: content.includes("<!DOCTYPE html>") },
    { name: "Has title tag", check: content.includes("<title>") },
    { name: "Has h1 heading", check: content.includes("<h1>") },
    { name: "Links to CSS", check: content.includes("style.css") },
    { name: "Links to JavaScript", check: content.includes("script.js") },
  ];

  let allPassed = true;

  tests.forEach((test) => {
    if (test.check) {
      console.log(`✅ PASS: ${test.name}`);
    } else {
      console.log(`❌ FAIL: ${test.name}`);
      allPassed = false;
    }
  });

  return allPassed;
}

// Test 3: Check if CSS file exists
function testCSSExists() {
  const cssPath = path.join(__dirname, "..", "style.css");

  if (fs.existsSync(cssPath)) {
    console.log("✅ PASS: style.css exists");
    return true;
  } else {
    console.log("❌ FAIL: style.css not found");
    return false;
  }
}

// Test 4: Check if JavaScript file exists
function testJSExists() {
  const jsPath = path.join(__dirname, "..", "script.js");

  if (fs.existsSync(jsPath)) {
    console.log("✅ PASS: script.js exists");
    return true;
  } else {
    console.log("❌ FAIL: script.js not found");
    return false;
  }
}

// Run all tests
console.log("🧪 Running tests...\n");

const results = [
  testIndexExists(),
  testHTMLContent(),
  testCSSExists(),
  testJSExists(),
];

const allTestsPassed = results.every((result) => result === true);

console.log("\n" + "=".repeat(50));

if (allTestsPassed) {
  console.log("✅ All tests passed!");
  process.exit(0);
} else {
  console.log("❌ Some tests failed");
  process.exit(1);
}
