import { ExcalidrawData } from "../../src/ExcalidrawData";
import { ExcalidrawPlugin, TFile } from "obsidian";
import { jest } from "@jest/globals";

// Mocking the Obsidian API and ExcalidrawData dependencies
jest.mock("obsidian");
jest.mock("../../src/ExcalidrawData");

describe("ExcalidrawData", () => {
  let data: ExcalidrawData;
  let plugin: ExcalidrawPlugin;
  let file: TFile;

  beforeEach(() => {
    plugin = new ExcalidrawPlugin();
    file = new TFile();
    data = new ExcalidrawData(plugin);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("loadData", () => {
    it("should load data correctly", async () => {
      const mockData = '{"elements": [], "appState": {}}';
      jest.mocked(plugin.app.vault.read).mockResolvedValue(mockData);

      await data.loadData(file, false, "text");

      expect(plugin.app.vault.read).toHaveBeenCalledWith(file);
      expect(data.scene).toEqual(JSON.parse(mockData));
    });

    it("should handle file read errors gracefully", async () => {
      jest.mocked(plugin.app.vault.read).mockRejectedValue(new Error("File read error"));

      await expect(data.loadData(file, false, "text")).rejects.toThrow("File read error");
    });
  });
});
