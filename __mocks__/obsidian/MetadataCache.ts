import { TFile, TFolder, MetadataCache, CachedMetadata, EventRef } from "obsidian";
import { MockEventRef } from './mockHelpers';

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

  on(eventName: "create" | "modify" | "delete" | "rename", callback: (...args: any[]) => void, ctx?: any): EventRef {
      // Your code logic here. Return a mock EventRef.
      return new MockEventRef(eventName, callback, ctx);
  }
  getBacklinksForFile(file: TFile): Record<string, number> {
      throw new Error("Method not implemented.");
  }

  getLinks(file: TFile): Record<string, number> {
      throw new Error("Method not implemented.");
  }

  blockCache: Record<string, any> = {};

  off(eventName: string, callback: (...args: any[]) => void, ctx?: any): void {
      throw new Error("Method not implemented.");
  }
}
