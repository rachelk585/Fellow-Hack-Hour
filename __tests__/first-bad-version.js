// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const { firstBadVersion } = require(`../challenges${version}/first-bad-version.js`);

describe('firstBadVersion tests', () => {
  const createIsBadVersionFunc = (n) => {
    return (num) => {
      return num >= n;
    }
  }

  it('Works for a n = 1, bad = 1', () => {
    const isBadVersion = createIsBadVersionFunc(1);

    const test = firstBadVersion(isBadVersion);
    expect(test(1)).toEqual(1);
  });

  it('works for n = 5', () => {
    const test1 = firstBadVersion(createIsBadVersionFunc(1));
    const test2 = firstBadVersion(createIsBadVersionFunc(2));
    const test3 = firstBadVersion(createIsBadVersionFunc(3));
    const test4 = firstBadVersion(createIsBadVersionFunc(4));
    const test5 = firstBadVersion(createIsBadVersionFunc(5));
    
    expect(test1(5)).toEqual(1);
    expect(test2(5)).toEqual(2);
    expect(test3(5)).toEqual(3);
    expect(test4(5)).toEqual(4);
    expect(test5(5)).toEqual(5);
  });

  it('works for n = 6', () => {
    const test1 = firstBadVersion(createIsBadVersionFunc(1));
    const test2 = firstBadVersion(createIsBadVersionFunc(2));
    const test3 = firstBadVersion(createIsBadVersionFunc(3));
    const test4 = firstBadVersion(createIsBadVersionFunc(4));
    const test5 = firstBadVersion(createIsBadVersionFunc(5));
    const test6 = firstBadVersion(createIsBadVersionFunc(6));
    
    expect(test1(6)).toEqual(1);
    expect(test2(6)).toEqual(2);
    expect(test3(6)).toEqual(3);
    expect(test4(6)).toEqual(4);
    expect(test5(6)).toEqual(5);
    expect(test6(6)).toEqual(6);
  });
});