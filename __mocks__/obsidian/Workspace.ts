import type { Workspace, WorkspaceLeaf } from "obsidian";

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

  on(name: string, callback: (...args: any[]) => any, ctx?: any): void {
    throw new Error("Method not implemented.");
  }

  off(name: string, callback: (...args: any[]) => any, ctx?: any): void {
    throw new Error("Method not implemented.");
  }

  trigger(name: string, ...data: any[]): void {
    throw new Error("Method not implemented.");
  }
}
