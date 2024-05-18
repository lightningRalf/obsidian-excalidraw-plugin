import { TFile, TFolder, MetadataCache, CachedMetadata } from "obsidian";

export class MetadataCacheMock implements MetadataCache {
  getCache(path: string): CachedMetadata | null {
    throw new Error("Method not implemented.");
  }

  getFirstLinkpathDest(linkpath: string, sourcePath: string): TFile | null {
    throw new Error("Method not implemented.");
  }

  getFileCache(file: TFile): any {
    throw new Error("Method not implemented.");
  }

  getFolders(): TFolder[] {
    throw new Error("Method not implemented.");
  }

  onCleanCache(callback: () => void): void {
    throw new Error("Method not implemented.");
  }

  resolveLinks(): void {
    throw new Error("Method not implemented.");
  }

  trigger(name: string, data?: any): void {
    throw new Error("Method not implemented.");
  }
}
