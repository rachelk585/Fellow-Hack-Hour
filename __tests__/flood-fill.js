// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {floodFill} = require(`../challenges${version}/flood-fill.js`);

describe('floodFill tests', () => {
  it('mutates the original image', () => {
    const img = [[1,1]];
    const editedImg = floodFill(img,0,0,2);
    expect(editedImg).toBe(img);
  });
  it('does not change the image when the starting pixel is already the target color', () => {
    const img = [[1,1,0], [0,0,0]];
    const editedImg = floodFill(img,0,1,1);
    expect(editedImg).toBe(img);
    expect(editedImg).toEqual([[1,1,0], [0,0,0]]);
  });
  it('works', () => {
    expect(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2)).toEqual([[2,2,2],[2,2,0],[2,0,1]]);
  });
});