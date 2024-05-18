import { AppMock } from "./obsidian/App";
import { PluginMock } from "./obsidian/Plugin";
import { ModalMock } from "./obsidian/Modal";
import { PluginSettingTabMock } from "./obsidian/PluginSettingTab";
import { VaultMock } from "./obsidian/Vault";
import { MetadataCacheMock } from "./obsidian/MetadataCache";
import { WorkspaceMock } from "./obsidian/Workspace";
import { MockEventRef } from "./obsidian/mockHelpers";

export class WorkspaceMock {
    // Define the necessary properties and methods for WorkspaceMock
    activeLeaf: WorkspaceLeaf | null = null;

    // Implement the method overloads for the 'on' method
    on(name: "quick-preview", callback: (file: TFile, data: string) => any, ctx?: any): EventRef;
    on(name: "resize", callback: () => any, ctx?: any): EventRef;
    on(name: "active-leaf-change", callback: (leaf: WorkspaceLeaf | null) => any, ctx?: any): EventRef;
    on(name: "file-open", callback: (file: TFile | null) => any, ctx?: any): EventRef;
    on(name: string, callback: (...args: any[]) => any, ctx?: any): EventRef {
        return new MockEventRef(name, callback, ctx);
    }

module.exports = {
	App: AppMock,
	Plugin: PluginMock,
	Modal: ModalMock,
	PluginSettingTab: PluginSettingTabMock,
	Vault: VaultMock,
	MetadataCache: MetadataCacheMock,
	Workspace: WorkspaceMock,
};
