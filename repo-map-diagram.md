classDiagram
    class ExcalidrawPlugin {
        +excalidrawConfig: ExcalidrawConfig
        +taskbone: Taskbone
        +settings: ExcalidrawSettings
        +openDialog: OpenFileDialog
        +insertLinkDialog: InsertLinkDialog
        +insertCommandDialog: InsertCommandDialog
        +excalidrawFiles: Set<TFile>
        +excalidrawFileModes: object
        -_loaded: boolean
        +locale: string
        +onload()
        +onunload()
        +loadSettings()
        +saveSettings()
        +getEA(): ExcalidrawAutomate
    }
    class ExcalidrawAutomate {
        +obsidian: any
        +DEVICE: DeviceType
        +LASERPOINTER: object
        +getAttachmentFilepath(filename: string): Promise<string>
        +compressToBase64(str: string): string
        +decompressFromBase64(str: string): string
    }
    class ExcalidrawView {
        +excalidrawContainer: HTMLDivElement
        +exportDialog: ExportDialog
        +excalidrawData: ExcalidrawData
        +excalidrawAPI: any
        +excalidrawWrapperRef: React.MutableRefObject<any>
        +toolsPanelRef: React.MutableRefObject<any>
        +embeddableMenuRef: React.MutableRefObject<any>
        -parentMoveObserver: MutationObserver | CustomMutationObserver
        +getViewType(): string
        +getDisplayText(): string
        +onload()
        +onunload()
        +getState(): any
        +setState(state: any, result: ViewStateResult): Promise<void>
    }
    class ExcalidrawData {
        +textElements: Map
        +elementLinks: Map
        +scene: any
        +deletedElements: ExcalidrawElement[]
        +file: TFile
        -app: App
        +serialize(): string
        +deserialize(data: string): void
        +getElementsFromScene(): ExcalidrawElement[]
    }
    class EmbeddedFilesLoader {
        -pdfDocsMap: Map
        -plugin: ExcalidrawPlugin
        -isDark: boolean
        +terminate: boolean
        +uid: string
        +loadFiles(elements: ExcalidrawElement[]): Promise<void>
        +terminateAndDestroy(): void
    }
    class ScriptEngine {
        -plugin: ExcalidrawPlugin
        -scriptPath: string
        +scriptIconMap: ScriptIconMap
        +loadScripts(): void
        +runScript(scriptName: string, ea: ExcalidrawAutomate): Promise<void>
    }
    class ImageCache {
        -dbName: string
        -cacheStoreName: string
        -backupStoreName: string
        -db: IDBDatabase
        -plugin: ExcalidrawPlugin
        -app: App
        +initializationNotice: boolean
        -obsidanURLCache: Map<string, string>
        +initialize(): Promise<void>
        +getImage(key: ImageKey): Promise<string | null>
        +setImage(key: ImageKey, value: string): Promise<void>
    }
    class StylesManager {
        -stylesMap: Map
        -styleLight: string
        -styleDark: string
        -plugin: ExcalidrawPlugin
        +addStyle(doc: Document): void
        +removeStyle(doc: Document): void
        +updateStyle(): void
    }
    class ExcalidrawConfig {
        +areaLimit: number
        +widthHeightLimit: number
        +updateValues(): void
    }
    class Taskbone {
        +apiKey: string
        +ocr(imageData: string): Promise<string>
    }
    class ExcalidrawSettings {
        +folder: string
        +cropFolder: string
        +annotateFolder: string
        +embedUseExcalidrawFolder: boolean
        +templateFilePath: string
        +scriptFolderPath: string
        +compress: boolean
        +autosave: boolean
        +autoexportPNG: boolean
        +autoexportSVG: boolean
        +laserSettings: object
    }
    class OpenFileDialog {
        -plugin: ExcalidrawPlugin
        -action: openDialogAction
        -onNewPane: boolean
        +getItems(): TFile[]
        +getItemText(item: TFile): string
        +onChooseItem(item: TFile): void
    }
    class InsertLinkDialog {
        -plugin: ExcalidrawPlugin
        -addText: Function
        -drawingPath: string
        +getItems(): TFile[]
        +getItemText(item: TFile): string
        +onChooseItem(item: TFile): void
    }
    class InsertCommandDialog {
        -addText: Function
        +getItems(): Command[]
        +getItemText(item: Command): string
        +onChooseItem(item: Command): void
    }
    class ExportDialog {
        -ea: ExcalidrawAutomate
        -api: ExcalidrawImperativeAPI
        +padding: number
        +scale: number
        +theme: string
        +transparent: boolean
        +saveSettings: boolean
        +dirty: boolean
        -selectedOnlySetting: Setting
        +onOpen(): void
        +onClose(): void
        -createForm(): void
    }
    class CanvasNodeFactory {
        -view: ExcalidrawView
        +leaf: WorkspaceLeaf
        +canvas: ObsidianCanvas
        +nodes: Map<string, ObsidianCanvasNode>
        +initialized: boolean
        +isInitialized(): boolean
        +initialize(): Promise<void>
        +createNode(file: TFile): Promise<ObsidianCanvasNode>
    }
    class CropImage {
        -imageEA: ExcalidrawAutomate
        -maskEA: ExcalidrawAutomate
        -bbox: object
        +crop(): Promise<string>
    }
    class CustomMutationObserver {
        -originalCallback: MutationCallback
        -observer: MutationObserver | null
        -name: string
        +observe(target: Node, options?: MutationObserverInit): void
        +disconnect(): void
    }
    class ExcalidrawSettingTab {
        -plugin: ExcalidrawPlugin
        -requestEmbedUpdate: boolean
        -requestReloadDrawings: boolean
        -requestUpdatePinnedPens: boolean
        -requestUpdateDynamicStyling: boolean
        +display(): void
    }
    class UniversalInsertFileModal {
        -plugin: ExcalidrawPlugin
        -view: ExcalidrawView
        -center: object
        -file: TFile
        +onOpen(): void
        +onClose(): void
        -createForm(): void
    }
    class ImportSVGDialog {
        -plugin: ExcalidrawPlugin
        -view: ExcalidrawView
        +getItems(): TFile[]
        +getItemText(item: TFile): string
        +onChooseItem(item: TFile): void
    }
    class InsertPDFModal {
        -plugin: ExcalidrawPlugin
        -view: ExcalidrawView
        -borderBox: boolean
        -gapSize: number
        -groupPages: boolean
        -direction: string
        -numColumns: number
        -numRows: number
        -lockAfterImport: boolean
        -pagesToImport: number[]
        -pageDimensions: object
        +onOpen(): void
        +onClose(): void
        -createForm(): void
    }
    class InsertImageDialog {
        -plugin: ExcalidrawPlugin
        -view: ExcalidrawView
        +getItems(): TFile[]
        +getItemText(item: TFile): string
        +onChooseItem(item: TFile): void
    }
    class InsertMDDialog {
        -plugin: ExcalidrawPlugin
        -view: ExcalidrawView
        +getItems(): TFile[]
        +getItemText(item: TFile): string
        +onChooseItem(item: TFile): void
    }
    class EditorHandler {
        -plugin: ExcalidrawPlugin
        -activeEditorExtensions: Extension[]
        +setup(): void
        +updateCMExtensionState(extension: Extension, enabled: boolean): void
    }
    class EmbeddedFile {
        +file: TFile
        +isSVGwithBitmap: boolean
        -img: string
        -imgInverted: string
        +mtime: number
        -plugin: ExcalidrawPlugin
        +mimeType: MimeType
        +size: Size
        +linkParts: LinkParts
        +getDataURL(isDark: boolean): Promise<string>
        +destroy(): void
    }
    class ExcalidrawSettingTab {
        -plugin: ExcalidrawPlugin
        -requestEmbedUpdate: boolean
        -requestReloadDrawings: boolean
        -requestUpdatePinnedPens: boolean
        -requestUpdateDynamicStyling: boolean
        +display(): void
    }
    class FieldSuggester {
        -plugin: ExcalidrawPlugin
        +suggestType: string
        +latestTriggerInfo: EditorSuggestTriggerInfo
        +getSuggestions(context: EditorSuggestContext): string[]
        +renderSuggestion(suggestion: string, el: HTMLElement): void
        +selectSuggestion(suggestion: string): void
    }
    class FileSuggestionModal {
        +text: TextComponent
        +cache: CachedMetadata
        +files: TFile[]
        +file: TFile
        +getItems(): TFile[]
        +getItemText(item: TFile): string
        +onChooseItem(item: TFile): void
    }
    class GenericInputPrompt {
        +waitForClose: Promise<string>
        -view: ExcalidrawView
        -plugin: ExcalidrawPlugin
        -resolvePromise: (input: string) => void
        -rejectPromise: (reason?: any) => void
        -didSubmit: boolean
        -inputComponent: TextAreaComponent
        -input: string
        -buttons: ButtonDefinition[]
        +static Prompt(view: ExcalidrawView, plugin: ExcalidrawPlugin, app: App, header: string, placeholder?: string, value?: string, buttons?: ButtonDefinition[], lines?: number, displayEditorButtons?: boolean): Promise<string>
    }
    class ModifierKeySettingsComponent {
        -isMacOS: boolean
        +display(): void
        +save(): void
    }
    class NewFileActions {
        +waitForClose: Promise<TFile|null>
        -resolvePromise: (file: TFile|null) => void
        -rejectPromise: (reason?: any) => void
        -newFile: TFile
        -plugin: ExcalidrawPlugin
        -path: string
        -keys: KeyEvent
        -view: ExcalidrawView
        -openNewFile: boolean
        +onOpen(): void
        +onClose(): void
    }
    class PublishOutOfDateFilesDialog {
        -plugin: ExcalidrawPlugin
        +onOpen(): void
        +onClose(): void
    }
    class ReleaseNotes {
        -plugin: ExcalidrawPlugin
        -version: string
        +onOpen(): void
        +onClose(): void
    }
    class ScriptInstallPrompt {
        -plugin: ExcalidrawPlugin
        -contentDiv: HTMLDivElement
        +onOpen(): void
        +onClose(): void
    }
    class SelectCard {
        -view: ExcalidrawView
        -sections: string[]
        +getItems(): string[]
        +getItemText(item: string): string
        +onChooseItem(item: string): void
    }

    ExcalidrawPlugin --> ExcalidrawAutomate
    ExcalidrawPlugin --> ExcalidrawView
    ExcalidrawPlugin --> ScriptEngine
    ExcalidrawPlugin --> ImageCache
    ExcalidrawPlugin --> StylesManager
    ExcalidrawPlugin --> ExcalidrawConfig
    ExcalidrawPlugin --> Taskbone
    ExcalidrawPlugin --> ExcalidrawSettings
    ExcalidrawPlugin --> OpenFileDialog
    ExcalidrawPlugin --> InsertLinkDialog
    ExcalidrawPlugin --> InsertCommandDialog
    ExcalidrawPlugin --> ExcalidrawSettingTab
    ExcalidrawPlugin --> EditorHandler
    ExcalidrawView --> ExcalidrawData
    ExcalidrawView --> EmbeddedFilesLoader
    ExcalidrawView --> ExportDialog
    ExcalidrawView --> CanvasNodeFactory
    ExcalidrawView --> UniversalInsertFileModal
    ExcalidrawView --> ImportSVGDialog
    ExcalidrawView --> InsertPDFModal
    ExcalidrawView --> InsertImageDialog
    ExcalidrawView --> InsertMDDialog
    ExcalidrawAutomate --> CropImage
    ExcalidrawView --> CustomMutationObserver
    ExcalidrawData --> EmbeddedFile
    ExcalidrawPlugin --> FieldSuggester
    ExcalidrawPlugin --> FileSuggestionModal
    ExcalidrawPlugin --> GenericInputPrompt
    ExcalidrawPlugin --> ModifierKeySettingsComponent
    ExcalidrawPlugin --> NewFileActions
    ExcalidrawPlugin --> PublishOutOfDateFilesDialog
    ExcalidrawPlugin --> ReleaseNotes
    ExcalidrawPlugin --> ScriptInstallPrompt
    ExcalidrawView --> SelectCard
