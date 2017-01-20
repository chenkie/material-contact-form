import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ConfirmClearDialogComponent } from './confirm-clear-dialog/confirm-clear-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    ConfirmClearDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmClearDialogComponent]
})
export class AppModule { }
