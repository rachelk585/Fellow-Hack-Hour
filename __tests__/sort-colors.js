// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const {sortColors} = require(`../challenges${version}/sort-colors.js`);

describe('sortColors tests', () => {

  it('mutates the original input array', () => {
    const arr = [2, 0, 1];
    expect(sortColors(arr)).toBeUndefined();
    expect(arr).toEqual([0,1,2]);
  });

  describe('works', () => {
    it('test 1: [2,0,2,1,1,0]', () => {
      const arr1 = [2,0,2,1,1,0];
      sortColors(arr1);
      expect(arr1).toEqual([0,0,1,1,2,2]);
    });    
    it('test 2: [2,0,1]', () => {
      const arr2 = [2,0,1];
      sortColors(arr2);
      expect(arr2).toEqual([0,1,2]);
    });    
    it('test 3: [1,0,1]', () => {
      const arr3 = [1,0,1];
      sortColors(arr3);
      expect(arr3).toEqual([0,1,1]);
    });    
    it('test 4: [1,2,1]', () => {
      const arr4 = [1,2,1];
      sortColors(arr4);
      expect(arr4).toEqual([1,1,2]);
    });    
    it('test 5: [1,0]', () => {
      const arr5 = [1,0];
      sortColors(arr5);
      expect(arr5).toEqual([0,1]);
    });    
    it('test 6: [2,2]', () => {
      const arr6 = [2,2];
      sortColors(arr6);
      expect(arr6).toEqual([2,2]);
    });    
    it('test 7: [0,2]', () => {
      const arr7 = [0,2];
      sortColors(arr7);
      expect(arr7).toEqual([0,2]);
    });    
    it('test 8: [1,2,0]', () => {
      const arr8 = [1,2,0];
      sortColors(arr8);
      expect(arr8).toEqual([0,1,2]);
    });    

  });

});