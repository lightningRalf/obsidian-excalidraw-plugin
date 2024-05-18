import { ExcalidrawAutomate } from "../../src/ExcalidrawAutomate";
import { AppMock as App, VaultMock as Vault, MetadataCacheMock as MetadataCache, WorkspaceMock as Workspace } from "../../__mocks__/obsidian";


describe("ExcalidrawAutomate", () => {
  let ea: ExcalidrawAutomate;

  beforeEach(() => {
    // Setup mock Obsidian environment
    global.app = App;
    global.app.vault = Vault;
    global.app.metadataCache = MetadataCache;
    global.app.workspace = Workspace;

    ea = new ExcalidrawAutomate(App);
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

      expect(Vault.create).toHaveBeenCalledWith(expect.stringContaining(foldername + "/" + filename), expect.stringContaining(content));
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

