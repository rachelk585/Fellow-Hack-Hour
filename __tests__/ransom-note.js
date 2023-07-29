// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const { canConstruct } = require(`../challenges${version}/ransom-note.js`);

describe('ransom-note tests', () => {
  it('works', () => {
    expect(canConstruct('a', 'b')).toEqual(false);
    expect(canConstruct('aa', 'ab')).toEqual(false);
    expect(canConstruct('aa', 'aab')).toEqual(true);
    expect(canConstruct('fffbfg', 'effjfggbffjdgbjjhhdegh')).toEqual(true);
    expect(canConstruct('fihjjjjei', 'hjibagacbhadfaefdjaeaebgi')).toEqual(false);
    expect(canConstruct('aab', 'baa')).toEqual(true);
    expect(canConstruct('aab', 'aab')).toEqual(true);
  });
});