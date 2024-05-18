import { ExcalidrawAutomate } from "../../src/ExcalidrawAutomate";
import { mockApp, mockVault, mockMetadataCache, mockWorkspace } from "../../src/__mocks__/obsidian";

describe("ExcalidrawAutomate", () => {
  let ea: ExcalidrawAutomate;

  beforeEach(() => {
    // Setup mock Obsidian environment
    global.app = mockApp;
    global.app.vault = mockVault;
    global.app.metadataCache = mockMetadataCache;
    global.app.workspace = mockWorkspace;

    ea = new ExcalidrawAutomate(mockApp.plugins.plugins["obsidian-excalidraw-plugin"]);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("File handling functionalities", () => {
    test("should create a new Excalidraw drawing", async () => {
      const filename = "test.excalidraw";
      const foldername = "Drawings";
      const content = "mock content";

      await ea.create({ filename, foldername, plaintext: content });

      expect(mockVault.create).toHaveBeenCalledWith(expect.stringContaining(foldername + "/" + filename), expect.stringContaining(content));
    });

    // Additional tests for file handling functionalities
  });

  describe("Drawing functionalities", () => {
    test("should add a rectangle to the drawing", () => {
      ea.addRect(0, 0, 100, 100);

      const elements = ea.getElements();
      expect(elements).toHaveLength(1);
      expect(elements[0].type).toBe("rectangle");
    });

    // Additional tests for drawing functionalities
  });

  describe("Error handling and edge cases", () => {
    test("should handle non-existent plugin gracefully", () => {
      const ea = new ExcalidrawAutomate(undefined);

      expect(() => ea.addRect(0, 0, 100, 100)).not.toThrow();
    });

    // Additional tests for error handling and edge cases
  });
});
