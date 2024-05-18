import { ExcalidrawAutomate } from '../../src/ExcalidrawAutomate';
import { jest } from "@jest/globals";

// Mocking the Obsidian API and ExcalidrawData dependencies
jest.mock("ExcalidrawPlugin");

describe('connectObjects functionality', () => {
  let ea: ExcalidrawAutomate;
  let plugin: ExcalidrawPlugin; // Mock plugin instance

  beforeEach(() => {
    plugin = new ExcalidrawPlugin(); // Initialize mock plugin instance
    ea = new ExcalidrawAutomate(plugin); // Pass mock plugin instance to constructor
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
