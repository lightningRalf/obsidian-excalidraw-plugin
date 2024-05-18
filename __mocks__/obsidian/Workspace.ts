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

  on(name: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef;
  on(name: 'resize', callback: () => any, ctx?: any): EventRef;
  on(name: 'active-leaf-change', callback: (leaf: WorkspaceLeaf | null) => any, ctx?: any): EventRef;
  on(name: 'file-open', callback: (file: TFile | null) => any, ctx?: any): EventRef;
  on(name: 'layout-change', callback: () => any, ctx?: any): EventRef;
  on(name: 'window-open', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;
  on(name: 'window-close', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;
  on(name: 'css-change', callback: () => any, ctx?: any): EventRef;
  on(name: 'file-menu', callback: (menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;
  on(name: 'files-menu', callback: (menu: Menu, files: TAbstractFile[], source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;
  on(name: 'url-menu', callback: (menu: Menu, url: string) => any, ctx?: any): EventRef;
  on(name: 'editor-menu', callback: (menu: Menu, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
  on(name: 'editor-change', callback: (editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
  on(name: 'editor-paste', callback: (evt: ClipboardEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
  on(name: 'editor-drop', callback: (evt: DragEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
  on(name: 'quit', callback: (tasks: Tasks) => any, ctx?: any): EventRef;
    // on(name: string, callback: (...args: any[]) => any, ctx?: any): EventRef {
    // Actual implementation that just creates a mock EventRef
    // The real functionality would handle different types of events appropriately
    return new MockEventRef(name, callback, ctx);
  }

  off(name: string, callback: (...args: any[]) => any, ctx?: any): void {
    throw new Error("Method not implemented.");
  }

  trigger(name: string, ...data: any[]): void {
    throw new Error("Method not implemented.");
  }
}
