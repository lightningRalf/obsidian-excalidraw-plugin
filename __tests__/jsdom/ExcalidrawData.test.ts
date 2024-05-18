import { ExcalidrawData } from "../../src/ExcalidrawData";
import { App, TFile } from "obsidian";
import { jest } from "@jest/globals";

// Mocking the Obsidian API and ExcalidrawData dependencies
jest.mock("obsidian");
jest.mock("../../src/ExcalidrawData");

describe("ExcalidrawData", () => {
  let data: ExcalidrawData;
  let app: App;
  let file: TFile;

  beforeEach(() => {
    app = new App();
    file = new TFile();
    data = new ExcalidrawData(app);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe("loadData", () => {
    it("should load data correctly", async () => {
      const mockData = '{"elements": [], "appState": {}}';
      jest.mocked(app.vault.read).mockResolvedValue(mockData);

      await data.loadData(file);

      expect(app.vault.read).toHaveBeenCalledWith(file);
      expect(data.scene).toEqual(JSON.parse(mockData));
    });

    it("should handle file read errors gracefully", async () => {
      jest.mocked(app.vault.read).mockRejectedValue(new Error("File read error"));

      await expect(data.loadData(file)).rejects.toThrow("File read error");
    });
  });

  describe("saveData", () => {
    it("should save data correctly", async () => {
      const mockData = '{"elements": [], "appState": {}}';
      data.scene = JSON.parse(mockData);

      await data.saveData();

      expect(app.vault.modify).toHaveBeenCalledWith(file, mockData);
    });

    it("should handle file write errors gracefully", async () => {
      jest.mocked(app.vault.modify).mockRejectedValue(new Error("File write error"));

      await expect(data.saveData()).rejects.toThrow("File write error");
    });
  });

  // Additional tests for error handling, data integrity, etc.
});
