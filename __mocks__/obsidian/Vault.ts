import type { Vault, TAbstractFile, TFile, TFolder, DataWriteOptions, EventRef } from "obsidian";

class MockEventRef implements EventRef {
    private callback: Function;
    private eventName: string;
    private context: any;

    constructor(eventName: string, callback: Function, context?: any) {
        this.eventName = eventName;
        this.callback = callback;
        this.context = context;
    }

    // Method to simulate detaching the event listener
    detach() {
        console.log(`Detaching event ${this.eventName} from context`, this.context);
        // You might want to add logic to actually remove the listener if your mock supports it
    }

    // Additional methods to interact with the mock during tests
    trigger(args: any[]) {
        console.log(`Triggering event ${this.eventName} with args`, args);
        this.callback.apply(this.context, args);
    }
}

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
    on(eventName: "create" | "modify" | "delete" | "rename", callback: (...args: any[]) => void, ctx?: any): EventRef {
        // Your code logic here. Return a mock EventRef.
        return new MockEventRef(eventName, callback, ctx);
    }
    getConfig(key: string): any {
        throw new Error("Method not implemented.");
    }
    off(eventName: string, callback: (...args: any[]) => void, ctx?: any): void {
        throw new Error("Method not implemented.");
    }
    offref(ref: any): void {
        throw new Error("Method not implemented.");
    }
    trigger(eventName: string, ...params: any[]): void {
        throw new Error("Method not implemented.");
    }
    tryTrigger(eventName: string, ...params: any[]): boolean {
        throw new Error("Method not implemented.");
        return false; // Returning false as a default behavior, adjust as needed
    }    
    getName(): string {
        return "MockVault";  // Provide a mock implementation
    }
    getFileByPath(path: string): TFile | null {
        return null;  // Provide a mock implementation or return null
    }
    // Add other missing methods or properties with mock implementations
}
