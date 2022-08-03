
const comparator1 = (a, b) => a > b;
const comparator2 = (a, b) => a < b;

const compareTwo = (arr, comparator, callBack) => {
  if (comparator(arr[0], arr[1])) return callBack(arr[0]);
  else return callBack(arr[1]);
}

function multiplyBiggerNumByTwo(num1, num2) {
  let callBack =  bigNum => bigNum * 2;

  return compareTwo([num1, num2], comparator1, callBack);
}

function divideBiggerNumByThree(num1, num2) {
  let callBack = bigNum => bigNum / 3;

  return compareTwo([num1, num2], comparator1, callBack);
}

function eatMostTacos(sum1, sum2) {
  let callBack = bigNum => `I ate ${bigNum} tacos.`;

  return compareTwo([sum1, sum2], comparator1, callBack);
}

function adoptSmallerDog(weight1, weight2) {
  let callBack = smallDog => `I adopted a dog that weighs ${smallDog} pounds.`;

  return compareTwo([weight1, weight2], comparator2, callBack);
}

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};