import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { Toast, ToastType } from '../toast.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor(private _toastService: ToastService) {
    
  }

  ngOnInit() {
  }

  public makeToast(type: string, expiring: boolean) {
    switch(type) {
      case "error":
        this._toastService.makeToast(new Toast("This is a message!", ToastType.ERROR, expiring ? 10000 : null));
        break;
      case "warning":
        this._toastService.makeToast(new Toast("This is a message!", ToastType.WARNING, expiring ? 10000 : null));
        break;
      case "info":
        this._toastService.makeToast(new Toast("This is a message!", ToastType.INFO, expiring ? 10000 : null));
        break;
      case "success":
        this._toastService.makeToast(new Toast("This is a message!", ToastType.SUCCESS, expiring ? 10000 : null));
        break;
    }
  }
}
