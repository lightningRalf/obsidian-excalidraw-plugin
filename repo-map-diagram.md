classDiagram
    class ExcalidrawPlugin {
        +excalidrawConfig: ExcalidrawConfig
        +taskbone: Taskbone
        +settings: ExcalidrawSettings
        +openDialog: OpenFileDialog
        +insertLinkDialog: InsertLinkDialog
        +insertCommandDialog: InsertCommandDialog
    }
    class ExcalidrawAutomate {
        +obsidian: any
        +DEVICE: DeviceType
        +getAttachmentFilepath(filename: string): Promise<string>
    }
    class ExcalidrawView {
        +excalidrawContainer: HTMLDivElement
        +exportDialog: ExportDialog
        +excalidrawData: ExcalidrawData
        +excalidrawAPI: any
    }
    class ExcalidrawData {
        +textElements: Map
        +elementLinks: Map
        +scene: any
        +deletedElements: ExcalidrawElement[]
        +file: TFile
    }
    class EmbeddedFilesLoader {
        -pdfDocsMap: Map
        -plugin: ExcalidrawPlugin
        -isDark: boolean
        +terminate: boolean
        +uid: string
    }
    class ScriptEngine {
        -plugin: ExcalidrawPlugin
        -scriptPath: string
        +scriptIconMap: ScriptIconMap
    }
    class ImageCache {
        -dbName: string
        -cacheStoreName: string
        -backupStoreName: string
        -db: IDBDatabase
        -plugin: ExcalidrawPlugin
        -app: App
    }
    class StylesManager {
        -stylesMap: Map
        -styleLight: string
        -styleDark: string
        -plugin: ExcalidrawPlugin
    }
    class ExcalidrawConfig {
        +areaLimit: number
        +widthHeightLimit: number
    }
    class Taskbone {
        +apiKey: string
    }
    class ExcalidrawSettings {
        +folder: string
        +cropFolder: string
        +annotateFolder: string
        +embedUseExcalidrawFolder: boolean
        +templateFilePath: string
        +scriptFolderPath: string
    }
    class OpenFileDialog {
        -plugin: ExcalidrawPlugin
        -action: openDialogAction
        -onNewPane: boolean
    }
    class InsertLinkDialog {
        -plugin: ExcalidrawPlugin
        -addText: Function
        -drawingPath: string
    }
    class InsertCommandDialog {
        -addText: Function
    }
    class ExportDialog {
        -ea: ExcalidrawAutomate
        -api: ExcalidrawImperativeAPI
        +padding: number
        +scale: number
        +theme: string
        +transparent: boolean
        +saveSettings: boolean
    }
    class CanvasNodeFactory {
        -view: ExcalidrawView
        +leaf: WorkspaceLeaf
        +canvas: ObsidianCanvas
        +nodes: Map<string, ObsidianCanvasNode>
    }
    class CropImage {
        -imageEA: ExcalidrawAutomate
        -maskEA: ExcalidrawAutomate
        -bbox: object
    }
    class CustomMutationObserver {
        -originalCallback: MutationCallback
        -observer: MutationObserver | null
        -name: string
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
    ExcalidrawView --> ExcalidrawData
    ExcalidrawView --> EmbeddedFilesLoader
    ExcalidrawView --> ExportDialog
    ExcalidrawView --> CanvasNodeFactory
    ExcalidrawAutomate --> CropImage
    ExcalidrawView --> CustomMutationObserver
