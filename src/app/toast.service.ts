import { Toast } from "./toast.model";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";
import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()
export class ToastService {
    private _toast: Subject<Toast>;

    constructor() {
        this._toast = new Subject();
    }

    public getToaster(): Observable<Toast> {
        return this._toast.asObservable();
    }

    public makeToast(toast: Toast) {
        this._toast.next(toast);
    }
}