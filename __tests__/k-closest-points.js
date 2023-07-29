// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const { kClosest } = require(`../challenges${version}/k-closest-points.js`);

describe('kClosest tests', () => {
  it('Works [[1,3], [-2,2]]', () => {
    expect(kClosest([[1,3], [-2,2]],1)).toEqual(expect.arrayContaining([[-2,2]]));
  });

  it('Works [[3,3],[5,-1],[-2,4]]', () => {
    expect(kClosest([[3,3],[5,-1],[-2,4]],2)).toEqual(expect.arrayContaining([[-2,4],[3,3]]));
  });

});