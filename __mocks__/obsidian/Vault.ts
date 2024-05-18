import type { Vault, TAbstractFile, TFile, TFolder, DataWriteOptions } from "obsidian";

export class VaultMock implements Vault {
    adapter: any;  // Placeholder for the adapter property
    configDir: string = "";  // Placeholder for the configuration directory

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
    getFolderByPath(path: string): TFolder | null {
        return null; // Provide a mock implementation or return null
    }
    createBinary(path: string, data: ArrayBuffer, options?: any): Promise<TFile> {
        throw new Error("Method not implemented.");
    }
    cachedRead(file: TFile): Promise<string> {
        throw new Error("Method not implemented.");
    }
    readBinary(file: TFile): Promise<ArrayBuffer> {
        throw new Error("Method not implemented.");
    }
    getResourcePath(file: TFile): string {
        throw new Error("Method not implemented.");
    }
    modifyBinary(file: TFile, data: ArrayBuffer): Promise<void> {
        throw new Error("Method not implemented.");
    }
    append(file: TFile, data: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    process(file: TFile, fn: (data: string) => string, options?: DataWriteOptions): Promise<string> {
        throw new Error("Method not implemented.");
    }
        copy(file: TAbstractFile, destination: string): Promise<TFile> {
        throw new Error("Method not implemented.");
    }
    getAllLoadedFiles(): TAbstractFile[] {
        throw new Error("Method not implemented.");
    }
    getMarkdownFiles(): TFile[] {
        throw new Error("Method not implemented.");
    }
    getFiles(): TFile[] {
        throw new Error("Method not implemented.");
    }
    getName(): string {
        return "MockVault";  // Provide a mock implementation
    }
    getFileByPath(path: string): TFile | null {
        return null;  // Provide a mock implementation or return null
    }
    // Add other missing methods or properties with mock implementations
}
