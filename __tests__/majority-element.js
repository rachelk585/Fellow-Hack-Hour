// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const { majorityElement } = require(`../challenges${version}/majority-element.js`);
//jest.setTimeout(3000);

describe('majorityElement tests', () => {
  it('works', () => {
    expect(majorityElement([1])).toEqual(1);
    expect(majorityElement([1, 2, 2])).toEqual(2);
    expect(majorityElement([1, 1, 2])).toEqual(1);
    expect(majorityElement([1, 1])).toEqual(1);
    expect(majorityElement([1, 1, 100])).toEqual(1);
    expect(majorityElement([1, 1, 1, 2, 2])).toEqual(1);
    expect(majorityElement([1, 1, 2, 2, 2])).toEqual(2);
    expect(majorityElement([2, 1, 1, 1, 2])).toEqual(1);
    expect(majorityElement([2, 1, 2, 1, 2])).toEqual(2);
  });
});