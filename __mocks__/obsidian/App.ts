import type { App, FileManager, Keymap, MetadataCache, Scope, UserEvent, Vault, Workspace } from "obsidian";

export class AppMock implements App {
	get keymap(): Keymap {
		throw new Error("Not implemented.");
	}
	get scope(): Scope {
		throw new Error("Not implemented.");
	}
	get workspace(): Workspace {
		throw new Error("Not implemented.");
	}
	get vault(): Vault {
		throw new Error("Not implemented.");
	}
	get metadataCache(): MetadataCache {
		throw new Error("Not implemented.");
	}
	get fileManager(): FileManager {
		throw new Error("Not implemented.");
	}
	get lastEvent(): UserEvent | null {
		throw new Error("Not implemented.");
	}
	get internalPlugins(): any {
		throw new Error("Not implemented.");
	}
	isMobile(): boolean {
		throw new Error("Not implemented.");
	}
	getObsidianUrl(file: TFile): string {
		throw new Error("Not implemented.");
	}
	metadataTypeManager: {
		setType(name: string, type: string): void {
			throw new Error("Not implemented.");
		}
	};
}
