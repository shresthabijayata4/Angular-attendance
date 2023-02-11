import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public todayDate: any;
  public todayCheckinTime: any;
  public todayCheckoutTime: any;
  constructor() {}

  ngOnInit(): void {
    this.getCheckinTime();
    this.getCheckoutTime();
  }
  public getCheckinTime() {
    this.todayDate = new Date();
    this.todayCheckinTime =
      this.todayDate.getHours() + ':' + this.todayDate.getMinutes();
    if (this.todayDate.getHours < 10 && this.todayDate.getHours > 18) {
      // this.toastr.error('You cannot Checkin at this time');
      console.log('You cannot Checkout at this time');
    }
    if (this.todayDate.getHours > 10 && this.todayDate.getHours < 18) {
      if (this.todayDate.getHours() > 12) {
        this.todayCheckinTime =
          this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + 'pm';
      } else {
        this.todayCheckinTime =
          this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + 'am';
      }
    }

    console.log('checkin time is', this.todayCheckinTime);
  }
  public getCheckoutTime() {
    this.todayDate = new Date();
    this.todayCheckoutTime =
      this.todayDate.getHours() + ':' + this.todayDate.getMinutes();
    if (this.todayDate.getHours < 10 && this.todayDate.getHours < 18) {
      // this.toastr.error('You cannot Checkout at this time');
      console.log('You cannot Checkout at this time');
    }
    // console.log('You cannot Checkout at this time');

    if (this.todayDate.getHours > 10 && this.todayDate.getHours < 18) {
      if (this.todayDate.getHours() > 12) {
        this.todayCheckoutTime =
          this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + 'pm';
      } else {
        this.todayCheckoutTime =
          this.todayDate.getHours() + ':' + this.todayDate.getMinutes() + 'am';
      }
    }

    console.log('checkout time is', this.todayCheckoutTime);
  }
}
