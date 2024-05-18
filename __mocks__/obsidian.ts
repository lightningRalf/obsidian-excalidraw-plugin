// This file is a mock implementation of the Obsidian API for Jest testing
// It simulates the Obsidian environment for ExcalidrawAutomate, ExcalidrawView, and ExcalidrawData components

const mockVault = {
  getAbstractFileByPath: jest.fn(),
  read: jest.fn(),
  create: jest.fn(),
  modify: jest.fn(),
  delete: jest.fn(),
};

const mockMetadataCache = {
  getCache: jest.fn(),
  on: jest.fn(),
};

const mockWorkspace = {
  getActiveFile: jest.fn(),
  onLayoutReady: jest.fn(),
  on: jest.fn(),
};

const mockApp = {
  vault: mockVault,
  metadataCache: mockMetadataCache,
  workspace: mockWorkspace,
  plugins: {
    plugins: {
      "obsidian-excalidraw-plugin": {
        getExcalidrawAPI: jest.fn(),
      },
    },
  },
};

module.exports = {
  Vault: jest.fn(() => mockVault),
  MetadataCache: jest.fn(() => mockMetadataCache),
  Workspace: jest.fn(() => mockWorkspace),
  App: jest.fn(() => mockApp),
};
