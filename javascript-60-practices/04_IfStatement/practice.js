// Topic: If Statement & Truthy / Falsy

function checkValue(val) {
  if (val) {
    console.log(JSON.stringify(val), "is TRUTHY");
  } else {
    console.log(JSON.stringify(val), "is FALSY");
  }
}

checkValue(0);
checkValue("");
checkValue(null);
checkValue([]); // Surprise: Empty array is TRUTHY!
checkValue({}); // Surprise: Empty object is TRUTHY!
checkValue("0"); // Non-empty string is TRUTHY!
