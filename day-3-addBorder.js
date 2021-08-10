// give a rectangular matrix of characters, add a border of asterisks(*) to it.

// Example
// picture = ["abc", "ded"]

// The output should be
// addBorder(picture) = ["*****", "*abc*", "*ded*"]

// hints:

// concat()
// unshift()
// push()

const addBorder = (picture) => {
  const border = "*".repeat(picture[0].length + 2);
  picture.unshift(border);
  picture.push(border);
  for (i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }
  picture.forEach((element) => console.log(element));
};
picture = ["abc", "ded"];
addBorder(picture);
