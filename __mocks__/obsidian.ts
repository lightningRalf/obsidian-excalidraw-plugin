import { AppMock } from "./obsidian/App";
import { PluginMock } from "./obsidian/Plugin";
import { ModalMock } from "./obsidian/Modal";
import { PluginSettingTabMock } from "./obsidian/PluginSettingTab";
import { VaultMock } from "./obsidian/Vault";
import { MetadataCacheMock } from "./obsidian/MetadataCache";
import { WorkspaceMock } from "./obsidian/Workspace";

module.exports = {
	App: AppMock,
	Plugin: PluginMock,
	Modal: ModalMock,
	PluginSettingTab: PluginSettingTabMock,
	Vault: VaultMock,
	MetadataCache: MetadataCacheMock,
	Workspace: WorkspaceMock,
};
