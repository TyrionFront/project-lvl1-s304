import makeGame from '../gameEngine';
import getRandomNum from '../utils';

const description = 'Balance the given number.';

const makeBalance = (number) => {
  const numsInNumber = String(number).split('');
  const numsInNumberSum = numsInNumber.reduce((acc, num) => acc + Number(num), 0);
  const remainder = numsInNumberSum % numsInNumber.length;
  const avgNum = (numsInNumberSum - remainder) / numsInNumber.length;
  const numFromAvgNums = numsInNumber.map(() => avgNum);

  const balancedNum = numFromAvgNums.reduce((acc, num, i) => {
    const newNum = remainder > i ? num + 1 : num;
    return newNum + acc;
  }, '');
  return balancedNum;
};

const startLimit = 10;
const endLimit = 10000;

const makeQuestionAnswer = () => {
  const question = getRandomNum(startLimit, endLimit);
  return [question, makeBalance(question)];
};

export default gamerName => makeGame(description, makeQuestionAnswer, gamerName);
