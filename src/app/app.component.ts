import { Component } from '@angular/core';
import { ToastService } from './toast.service';
import { Toast, ToastType } from './toast.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private _toast: Toast;

  constructor(private _toastService: ToastService) {
    this._toastService.getToaster().subscribe((toast: Toast) => {
      this._toast = toast;
    });
  }

  public get toast(): Toast {
    return this._toast;
  }
}
