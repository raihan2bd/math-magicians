import calculate from '../components/logic/calculate';

describe('Test calculate.js and operate.js logic', () => {
  test('Should return a object', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, '5');
    expect(typeof result).toBe('object');
  });

  test('Should return a 5', () => {
    const obj = {
      total: null,
      next: null,
      operation: null,
    };

    const result = calculate(obj, '5');
    expect(result.next).toBe('5');
  });

  test('Should return a 10', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '+',
    };

    const result = calculate(obj, '=');
    expect(result.total).toBe('10');
  });

  test('Should return a 0', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: '-',
    };

    const result = calculate(obj, '=');
    expect(result.total).toBe('0');
  });

  test('Should return a 25', () => {
    const obj = {
      total: '5',
      next: '5',
      operation: 'x',
    };

    const result = calculate(obj, '=');
    expect(result.total).toBe('25');
  });

  test('Should return 5', () => {
    const obj = {
      total: '25',
      next: '5',
      operation: '÷',
    };

    const result = calculate(obj, '=');
    expect(result.total).toBe('5');
  });
});
