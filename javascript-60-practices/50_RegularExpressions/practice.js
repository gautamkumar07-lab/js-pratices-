// Topic: Regular Expressions (RegExp, Flags, Groups)

// 1. Named Capturing Groups (Modern ES2018+)
const datePattern = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = "Date recorded: 2026-10-23".match(datePattern);

if (match && match.groups) {
  const { year, month, day } = match.groups;
  console.log(`Parsed Date -> Year: ${year}, Month: ${month}, Day: ${day}`);
}

// 2. regex.test for validation
const hexColorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
console.log("Is #10B981 valid hex:", hexColorRegex.test("#10B981"));
console.log("Is #XYZ valid hex:", hexColorRegex.test("#XYZ"));

// 3. String replacement with regex
const phone = "123.456.7890";
const formatted = phone.replace(/\./g, "-");
console.log("Formatted phone:", formatted);
