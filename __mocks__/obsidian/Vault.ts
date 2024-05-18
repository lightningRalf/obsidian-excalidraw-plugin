import type { Vault, TAbstractFile, TFile, TFolder } from "obsidian";

export class VaultMock implements Vault {
  delete(target: TAbstractFile, force?: boolean): Promise<void> {
    throw new Error("Method not implemented.");
  }
  trash(target: TAbstractFile, system?: boolean): Promise<void> {
    throw new Error("Method not implemented.");
  }
  rename(file: TAbstractFile, newPath: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  modify(file: TFile, data: string | ArrayBuffer, options?: any): Promise<void> {
    throw new Error("Method not implemented.");
  }
  read(file: TFile): Promise<string> {
    throw new Error("Method not implemented.");
  }
  create(path: string, data?: string, options?: any): Promise<TFile> {
    throw new Error("Method not implemented.");
  }
  createFolder(path: string): Promise<TFolder> {
    throw new Error("Method not implemented.");
  }
  getAbstractFileByPath(path: string): TAbstractFile {
    throw new Error("Method not implemented.");
  }
  getRoot(): TFolder {
    throw new Error("Method not implemented.");
  }
}
