const containsDuplicate = (nums) => {
  const sortedNums = nums
    .split(",")
    .map((num) => Number(num))
    .sort((a, b) => a - b);

  for (let i = 0; i < sortedNums.length - 1; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      return true;
    }
  }
  return false;
};

function checkForDuplicate() {
  const numsInput = document.getElementById("nums");
  const nums = numsInput.value;
  const result = containsDuplicate(nums);
  const resultElement = document.getElementById("result");
  if (result) {
    resultElement.innerText = "The list contains a duplicate: true";
  } else {
    resultElement.innerText = "The list does not contain any duplicates: false";
  }
}
