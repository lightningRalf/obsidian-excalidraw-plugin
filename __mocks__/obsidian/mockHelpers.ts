export class MockEventRef implements EventRef {
    private callback: Function;
    private eventName: string;
    private context: any;

    constructor(eventName: string, callback: Function, context?: any) {
        this.eventName = eventName;
        this.callback = callback;
        this.context = context;
    }
    detach() {
        console.log(`Detaching event ${this.eventName} from context`, this.context);
    }
    trigger(args: any[]) {
        console.log(`Triggering event ${this.eventName} with args`, args);
        this.callback.apply(this.context, args);
    }
}
