import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  @ViewChild('contactForm') public contactForm: any;

  constructor() { }

  ngOnInit() {
  }

  onContactFormSubmit(formData) {
    console.log(formData)
    this.contactForm.reset();
    if (formData.optIn) {
      alert(`Your ${formData.subject} message has been sent and you\'ve been subscribed to the mailing list!`);
    } else {
      alert(`Your ${formData.subject} message has been sent!`)
    }
  }

  onContactFormClear() {
    if (confirm('Are you sure you want to clear the form?')) {
      this.contactForm.reset();
    }
  }
}
