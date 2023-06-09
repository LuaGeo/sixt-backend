// Function to generate the reservation reference

function generateReservationReference(date, name) {
  // Extract the required information from the date
  const [year, month] = date.split("-");

  // Extract the first three letters of the personal name (without spaces)
  const firstLettersOfLastName = name
    .split(" ")
    .join("")
    .slice(0, 3)
    .toUpperCase();

  // Generate the reservation index (from 000 to 999)
  const currentIndex = generateIndex();

  // Create the reservation reference by combining the extracted information
  const reference = `${firstLettersOfLastName}${year.slice(
    -2
  )}${month}${currentIndex}`;

  return reference;
}

function generateIndex() {
  // Generate a random integer between 0 and 999
  const index = Math.floor(Math.random() * 1000);

  // Pad the index with leading zeros to ensure it has three digits
  return index.toString().padStart(3, "0");
}

module.exports = generateReservationReference;
