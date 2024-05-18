import type { Workspace, WorkspaceLeaf, EventRef } from "obsidian";
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

  on(name: "quick-preview" | "resize" | "active-leaf-change" | "file-open", callback: (...args: any[]) => any, ctx?: any): EventRef {
      return new MockEventRef(name, callback, ctx);
  }

  off(name: string, callback: (...args: any[]) => any, ctx?: any): void {
    throw new Error("Method not implemented.");
  }

  trigger(name: string, ...data: any[]): void {
    throw new Error("Method not implemented.");
  }
}
