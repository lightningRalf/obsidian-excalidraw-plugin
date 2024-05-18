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
  fileToLinktext(file: TFile, sourcePath: string, omitMdExtension?: boolean): string {
    throw new Error("Method not implemented.");
  }

  resolvedLinks: Record<string, Record<string, number>> = {};
  unresolvedLinks: Record<string, Record<string, number>> = {};

  on(eventName: string, callback: (...args: any[]) => void, ctx?: any): EventRef {
      throw new Error("Method not implemented.");
  }
  
}
