import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ToastService } from './toast.service';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
