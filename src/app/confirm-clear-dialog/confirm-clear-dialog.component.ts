import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-clear-dialog',
  templateUrl: './confirm-clear-dialog.component.html',
  styleUrls: ['./confirm-clear-dialog.component.css']
})
export class ConfirmClearDialogComponent implements OnInit {

  constructor(public confirmClearDialog: MdDialogRef<ConfirmClearDialogComponent>) { }

  ngOnInit() {
  }

}
