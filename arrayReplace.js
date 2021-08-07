//give an array of integers, replace all the occurrences of elementToReplace with subtractionElem.
//     Example
// for inputArray = [1,2,1], elementToReplace=1 and subtractionElem = 3, then output should
// be arrayReplace(inputArray, elementToReplace, subtractionElem) = [3, 2, 3];

const arrayReplace = (inputArray, elementToReplace, subtractionElem) => {
  inputArray.map((item, index) => {
    if (item === elementToReplace) {
      inputArray[index] = subtractionElem;
    }
  });
  console.log(inputArray);
};

arrayReplace([1, 2, 1], 1, 3);
