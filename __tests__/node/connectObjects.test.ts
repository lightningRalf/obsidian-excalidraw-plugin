import { connectObjects } from '../../src/ExcalidrawAutomate';

describe('connectObjects functionality', () => {
  it('should return a string when connecting two objects', () => {
    const result = connectObjects(
      'objectA',
      null,
      'objectB',
      null,
      {
        numberOfPoints: 2,
        startArrowHead: 'arrow',
        endArrowHead: 'arrow',
        padding: 10,
      }
    );

    expect(typeof result).toBe('string');
  });

  it('should throw an error when either objectA or objectB is not found', () => {
    expect(() => connectObjects('unknownObject', null, 'objectB', null)).toThrowError();
    expect(() => connectObjects('objectA', null, 'unknownObject', null)).toThrowError();
  });
});
