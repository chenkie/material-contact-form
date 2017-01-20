import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmClearDialogComponent } from './../confirm-clear-dialog/confirm-clear-dialog.component';
import { MdDialog } from '@angular/material';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('contactForm') public contactForm: any;
  contactReasons: Array<any> = [
    { value: 'help-needed', viewValue: 'Help Needed' },
    { value: 'general-question', viewValue: 'General Question' },
    { value: 'complaint', viewValue: 'Complaint' }
  ];

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  onContactFormSubmit(formData) {
    this.contactForm.submitting = true;
    setTimeout(() => {
      this.contactForm.submitting = false;
      this.contactForm.reset();
      if (formData.optIn) {
        alert(`Your ${formData.subject} message has been sent and you\'ve been subscribed to the mailing list!`);
      } else {
        alert(`Your ${formData.subject} message has been sent!`)
      }
    }, 1500);
  }

  onContactFormClear() {
    let dialogRef = this.dialog.open(ConfirmClearDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result && result.shouldClear) {
        this.contactForm.reset();
      }
    });
  }
}
