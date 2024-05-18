import { TFile, TFolder, TAbstractFile, MetadataCache, CachedMetadata, EventRef } from "obsidian";
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

  on(eventName: "create" | "changed" | "deleted" | "resolve" | "resolved" | "modify" | "delete" | "rename", callback: (...args: any[]) => void, ctx?: any): EventRef {
      // Your code logic here. Return a mock EventRef.
      return new MockEventRef(eventName, callback, ctx);
  }
  getBacklinksForFile(file: TFile): Record<string, number> {
      throw new Error("Method not implemented.");
  }

  getLinks(): { [id: string]: { link: string; displayText: string; original: string; position: any; }[]; } {
      throw new Error("Method not implemented.");
  }
  blockCache = {
      getForFile: (x: any, f: TAbstractFile): any => {
          throw new Error("Method not implemented.");
      }
  }
  off(eventName: string, callback: (...args: any[]) => void, ctx?: any): void {
      throw new Error("Method not implemented.");
  }
  offref(ref: EventRef): void {
    throw new Error("Method not implemented.");
  }

  tryTrigger(eventName: string, ...params: any[]): boolean {
      throw new Error("Method not implemented.");
      return false; // Assuming a boolean return type for simplicity
  }
}
