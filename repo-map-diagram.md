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

    ExcalidrawPlugin --> ExcalidrawAutomate
    ExcalidrawPlugin --> ExcalidrawView
    ExcalidrawPlugin --> ScriptEngine
    ExcalidrawPlugin --> ImageCache
    ExcalidrawPlugin --> StylesManager
    ExcalidrawView --> ExcalidrawData
    ExcalidrawView --> EmbeddedFilesLoader
