
export enum ToastType {
    SUCCESS = "success",
    INFO = "info",
    WARNING = "warning",
    ERROR = "error"
}

export class Toast {
    private _message: string;
    private _toastType: ToastType;
    private _durationMilli: number;
    private _isDismissed: boolean = false;

    constructor(message: string, toastType: ToastType, durationMilli?: number) {
        this._message = message;
        this._toastType = toastType;
        this._durationMilli = durationMilli ? durationMilli : null;

        if(this._durationMilli) {
            // setInterval(this.dismiss(), this._durationMilli);
            setInterval(() => { this.dismiss(); }, this._durationMilli);
        }
    }

    public get message(): string {
        return this._message;
    }

    public get toastType(): ToastType {
        return this._toastType;
    }

    public get durationMilli(): number {
        return this._durationMilli;
    }

    public get isDismissed(): boolean {
        return this._isDismissed;
    }

    public dismiss() {
        this._isDismissed = true;
    }

    public get iconClass() {
        switch(this._toastType) {
            case ToastType.ERROR:
            case ToastType.WARNING:
                return 'fa-exclamation-triangle';
            case ToastType.INFO:
                return 'fa-info-circle';
            case ToastType.SUCCESS:
                return 'fa-check-circle';
        }

        return '';
    }
}