import { describe, it, expect, jest } from '@jest/globals';
import ExcalidrawView from '../../src/ExcalidrawView';
import { ExcalidrawAutomate } from '../../src/ExcalidrawAutomate';
import { App, Vault, MetadataCache, Workspace } from '../../__mocks__/obsidian';

describe('ExcalidrawView', () => {
  beforeEach(() => {
    // Setup mock for Obsidian API
    global.app = new App();
    global.app.vault = new Vault();
    global.app.metadataCache = new MetadataCache();
    global.app.workspace = new Workspace();
  });

  it('should toggle view mode correctly', () => {
    const view = new ExcalidrawView(Workspace.activeLeaf, App);
    const automate = new ExcalidrawAutomate(App, view);

    // Mock implementation for view mode toggling
    view.toggleViewMode = jest.fn();

    // Simulate toggling view mode
    automate.toggleViewMode();

    // Expect view mode toggle to have been called
    expect(view.toggleViewMode).toHaveBeenCalled();
  });

  it('should handle element selection correctly', () => {
    const view = new ExcalidrawView(Workspace.activeLeaf, App);
    const automate = new ExcalidrawAutomate(App, view);

    // Mock implementation for element selection
    view.selectElement = jest.fn();

    // Simulate selecting an element
    automate.selectElement('element-id');

    // Expect element to be selected
    expect(view.selectElement).toHaveBeenCalledWith('element-id');
  });

  it('should update drawing correctly', () => {
    const view = new ExcalidrawView(Workspace.activeLeaf, App);
    const automate = new ExcalidrawAutomate(App, view);

    // Mock implementation for drawing updates
    view.updateDrawing = jest.fn();

    // Simulate updating drawing
    automate.updateDrawing([]);

    // Expect drawing to be updated
    expect(view.updateDrawing).toHaveBeenCalledWith([]);
  });
});
