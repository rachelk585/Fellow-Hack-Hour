// if typescript argument is present, add '/typescript' subfolder to required filepath
const version = process.argv[3] ? `/${process.argv[3]}` : '';

const { MinStack } = require(`../challenges${version}/min-stack.js`);

describe('min-stack tests', () => {

  it('works', () => {
    const ms = new MinStack();
    ms.push(-2);
    ms.push(0);
    ms.push(-3);
    expect(ms.getMin()).toEqual(-3);
    ms.pop();
    expect(ms.top()).toEqual(0);
    expect(ms.getMin()).toEqual(-2);
  });
  
  it('works when multiple of same min value exists', () => {
    const ms = new MinStack();
    ms.push(-2);
    ms.push(0);
    ms.push(-3);
    ms.push(-3);
    expect(ms.getMin()).toEqual(-3);
    ms.pop();
    expect(ms.top()).toEqual(-3);
    expect(ms.getMin()).toEqual(-3);
    ms.pop();
    expect(ms.top()).toEqual(0);
    expect(ms.getMin()).toEqual(-2);

  });
});