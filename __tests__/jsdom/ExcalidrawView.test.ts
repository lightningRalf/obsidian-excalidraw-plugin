import { describe, it, expect, jest } from '@jest/globals';
import ExcalidrawView from '../../src/ExcalidrawView';
import { ExcalidrawAutomate } from '../../src/ExcalidrawAutomate';
import { mockObsidian } from './__mocks__/obsidian';

jest.mock('../../src/ExcalidrawView');
jest.mock('../../src/ExcalidrawAutomate');

describe('ExcalidrawView', () => {
  beforeEach(() => {
    // Setup mock for Obsidian API
    mockObsidian();
  });

  it('should toggle view mode correctly', () => {
    const view = new ExcalidrawView();
    const automate = new ExcalidrawAutomate();

    // Mock implementation for view mode toggling
    view.toggleViewMode = jest.fn();

    // Simulate toggling view mode
    automate.toggleViewMode(view);

    // Expect view mode toggle to have been called
    expect(view.toggleViewMode).toHaveBeenCalled();
  });

  it('should handle element selection correctly', () => {
    const view = new ExcalidrawView();
    const automate = new ExcalidrawAutomate();

    // Mock implementation for element selection
    view.selectElement = jest.fn();

    // Simulate selecting an element
    automate.selectElement(view, 'element-id');

    // Expect element to be selected
    expect(view.selectElement).toHaveBeenCalledWith('element-id');
  });

  it('should update drawing correctly', () => {
    const view = new ExcalidrawView();
    const automate = new ExcalidrawAutomate();

    // Mock implementation for drawing updates
    view.updateDrawing = jest.fn();

    // Simulate updating drawing
    automate.updateDrawing(view, []);

    // Expect drawing to be updated
    expect(view.updateDrawing).toHaveBeenCalledWith([]);
  });
});
