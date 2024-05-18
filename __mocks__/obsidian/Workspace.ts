import type { Workspace, WorkspaceLeaf, EventRef, TFile, TAbstractFile, Menu, Editor, MarkdownView, MarkdownFileInfo, Tasks, WorkspaceWindow } from "obsidian";
import { MockEventRef } from './mockHelpers';

export class WorkspaceMock implements Workspace {
  activeLeaf: WorkspaceLeaf | null = null;

  getActiveLeaf(): WorkspaceLeaf | null {
    return this.activeLeaf;
  }

  getLeavesOfType(type: string): WorkspaceLeaf[] {
    throw new Error("Method not implemented.");
  }

  onLayoutReady(callback: () => void): void {
    throw new Error("Method not implemented.");
  }

  on(eventName: "quick-preview" | "resize" | "active-leaf-change" | "file-open" | "layout-change" | "window-open" | "window-close" | "css-change" | "file-menu" | "files-menu" | "url-menu" | "editor-menu" | "editor-change" | "editor-paste" | "editor-drop" | "quit", callback: (...args: any[]) => any, ctx?: any): EventRef {
    // Your code logic here. Return a mock EventRef.
    return new MockEventRef(eventName, callback, ctx);
}


  off(eventName: string, callback: (...args: any[]) => any, ctx?: any): void {
    throw new Error("Method not implemented.");
  }

  trigger(eventName: string, ...data: any[]): void {
    throw new Error("Method not implemented.");
  }
}
