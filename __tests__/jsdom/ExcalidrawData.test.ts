import { ExcalidrawData } from "../../src/ExcalidrawData";
// Mocking the Obsidian API and ExcalidrawData dependencies
jest.mock("obsidian");
jest.mock("../../src/ExcalidrawData");

describe("ExcalidrawData", () => {
  let data: ExcalidrawData;
  let plugin: any; // Mocked plugin instance
  let file: any; // Mocked file instance

  beforeEach(() => {
    plugin = {}; // Mocking the plugin instance
    file = {}; // Mocking the file instance
    data = new ExcalidrawData(plugin);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("loadData", () => {
    it("should load data correctly", async () => {
      const mockData = '{"elements": [], "appState": {}}';
      jest.mocked(plugin.app.vault.read).mockResolvedValue(mockData);

      await data.loadData("mockFilePath", false, "text");

      expect(plugin.app.vault.read).toHaveBeenCalledWith("mockFilePath");
      expect(data.scene).toEqual(JSON.parse(mockData));
    });

    it("should handle file read errors gracefully", async () => {
      jest.mocked(plugin.app.vault.read).mockRejectedValue(new Error("File read error"));

      await expect(data.loadData("mockFilePath", false, "text")).rejects.toThrow("File read error");
    });
  });
});
