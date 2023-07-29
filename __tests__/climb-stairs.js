// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const { climbStairs } = require(`../challenges${version}/climb-stairs.js`);
//jest.setTimeout(3000);

describe('climbStairs tests', () => {
  it('works', () => {
    expect(climbStairs(1)).toEqual(1);
    expect(climbStairs(2)).toEqual(2);
    expect(climbStairs(3)).toEqual(3);
    expect(climbStairs(4)).toEqual(5);
    expect(climbStairs(5)).toEqual(8);
  });
  // can't figure out a way to have the jest test fail once it goes over a time limit. 
  // jest.setTimout() and adding an optional testTimeout argument, or fiddling with jest config files
  // all not working :(
    xit('should not run into stack overflow issues with large numbers', () => {
      expect(climbStairs(44)).toEqual(1134903170);
    }, 3000);
});