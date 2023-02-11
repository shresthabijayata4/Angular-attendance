import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'attendance-system';
  constructor() {}
  ngOnInit(): void {
    // this.getTime();
  }
}
