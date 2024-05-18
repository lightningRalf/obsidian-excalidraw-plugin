import { ExcalidrawAutomate, ExcalidrawPlugin } from '../../src/ExcalidrawAutomate';

describe('connectObjects functionality', () => {
  let ea: ExcalidrawAutomate;

  beforeEach(() => {
    const mockPlugin = {} as ExcalidrawPlugin; // Mocking the plugin instance
    ea = new ExcalidrawAutomate(mockPlugin); // Pass mock plugin instance to constructor
  });

  it('should return a string when connecting two objects', () => {
    const result = ea.connectObjects(
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
    expect(() => ea.connectObjects('unknownObject', null, 'objectB', null)).toThrowError();
    expect(() => ea.connectObjects('objectA', null, 'unknownObject', null)).toThrowError();
  });
});
