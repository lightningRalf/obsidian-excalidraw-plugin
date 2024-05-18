import type { WorkspaceLeaf, EventRef, TFile, TAbstractFile, Menu, Editor, MarkdownView, MarkdownFileInfo, Tasks, WorkspaceWindow } from "obsidian";
import { MockEventRef } from './mockHelpers';

interface Workspace {
  on(eventName: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef;
  on(eventName: 'resize', callback: () => any, ctx?: any): EventRef;
  on(eventName: 'active-leaf-change', callback: (leaf: WorkspaceLeaf | null) => any, ctx?: any): EventRef;
  on(eventName: 'file-open', callback: (file: TFile | null) => any, ctx?: any): EventRef;
  on(eventName: 'layout-change', callback: () => any, ctx?: any): EventRef;
  on(eventName: 'window-open', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;
  on(eventName: 'window-close', callback: (win: WorkspaceWindow, window: Window) => any, ctx?: any): EventRef;
  on(eventName: 'css-change', callback: () => any, ctx?: any): EventRef;
  on(eventName: 'file-menu', callback: (menu: Menu, file: TAbstractFile, source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;
  on(eventName: 'files-menu', callback: (menu: Menu, files: TAbstractFile[], source: string, leaf?: WorkspaceLeaf) => any, ctx?: any): EventRef;
  on(eventName: 'url-menu', callback: (menu: Menu, url: string) => any, ctx?: any): EventRef;
  on(eventName: 'editor-menu', callback: (menu: Menu, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef; 
  on(eventName: 'editor-change', callback: (editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
  /**
   * Triggered when the editor receives a paste event.
   * Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
   * Use `evt.preventDefault()` to indicate that you've handled the event.
   * @public
   */
  on(eventName: 'editor-paste', callback: (evt: ClipboardEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
  /**
   * Triggered when the editor receives a drop event.
   * Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
   * Use `evt.preventDefault()` to indicate that you've handled the event.
   * @public
   */
  on(eventName: 'editor-drop', callback: (evt: DragEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef;
  /**
   * Triggered when the app is about to quit. Not guaranteed to actually run.
   * Perform some best effort cleanup here.
   * @public
   */
  on(eventName: 'quit', callback: (tasks: Tasks) => any, ctx?: any): EventRef;
}

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

  //Overload for events
  on(eventName: 'quick-preview', callback: (file: TFile, data: string) => any, ctx?: any): EventRef {
    return new MockEventRef(eventName, callback, ctx);
  }
  on(eventName: 'resize', callback: () => any, ctx?: any): EventRef;
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
  /**
   * Triggered when the editor receives a paste event.
   * Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
   * Use `evt.preventDefault()` to indicate that you've handled the event.
   * @public
   */
  on(eventName: 'editor-paste', callback: (evt: ClipboardEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef {
    return new MockEventRef(eventName, callback, ctx);
  }
  /**
   * Triggered when the editor receives a drop event.
   * Check for `evt.defaultPrevented` before attempting to handle this event, and return if it has been already handled.
   * Use `evt.preventDefault()` to indicate that you've handled the event.
   * @public
   */
  on(eventName: 'editor-drop', callback: (evt: DragEvent, editor: Editor, info: MarkdownView | MarkdownFileInfo) => any, ctx?: any): EventRef {
    return new MockEventRef(eventName, callback, ctx);
  }
  /**
   * Triggered when the app is about to quit. Not guaranteed to actually run.
   * Perform some best effort cleanup here.
   * @public
   */
  on(eventName: 'quit', callback: (tasks: Tasks) => any, ctx?: any): EventRef {
    return new MockEventRef(eventName, callback, ctx);
  }

  // General method implementation
  on(eventName: string, callback: (...args: any[]) => any, ctx?: any): EventRef {
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
