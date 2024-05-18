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

  on(eventName: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'resize', callback: () => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'active-leaf-change', callback: (leaf: WorkspaceLeaf | null) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'file-open', callback: (file: TFile | null) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'layout-change', callback: () => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'window-open', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'window-close', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'css-change', callback: () => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'file-menu', callback: (menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'files-menu', callback: (menu: Menu, files: TAbstractFile[], source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'url-menu', callback: (menu: Menu, url: string) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'editor-menu', callback: (menu: Menu, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'editor-change', callback: (editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'editor-paste', callback: (evt: ClipboardEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'editor-drop', callback: (evt: DragEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'quit', callback: (tasks: Tasks) => any, ctx?: any): EventRef {
      return new MockEventRef(eventName, callback, ctx);
  }

  off(eventName: string, callback: (...args: any[]) => any, ctx?: any): void {
    throw new Error("Method not implemented.");
  }

  trigger(eventName: string, ...data: any[]): void {
    throw new Error("Method not implemented.");
  }
}
