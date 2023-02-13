import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';
import { TimestampService } from '../shared/timestamp.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  public todayDate: any;
  public todayCheckinTime: any;
  public todayCheckoutTime: any;

  public CheckinoutDetails: any = [];
  currentDate: any;
  disableCheckinButton: boolean = false;
  disableCheckoutButton: boolean = false;
  constructor(private timestamp: TimestampService, private auth: AuthService) {}

  ngOnInit(): void {
    // this.timestamp.getCheckinData().subscribe((checkinData) => {
    //   console.log(checkinData, '231');
    // });
    this.checkdaysCheckin();
    // if (this.disableCheckinButton == true) {
    //   this.disableCheckoutButton = false;
    // } else {
    //   this.disableCheckoutButton = true;
    // }
  }

  public checkdaysCheckin() {
    this.todayDate = new Date();
    let day = this.todayDate.getDate();
    let month = this.todayDate.getMonth() + 1;
    let year = this.todayDate.getFullYear();
    this.currentDate = `${day}-${month}-${year}`;
    this.todayCheckinTime =
      this.todayDate.getHours() + ':' + this.todayDate.getMinutes();
    this.timestamp.getCheckinData().subscribe((checkinData) => {
      checkinData.forEach((datacheck) => {
        // if (datacheck.date == this.currentDate && datacheck.checkin) {
        //   this.disableCheckinButton = true;
        //   if (datacheck.checkout) {
        //     this.disableCheckoutButton = true;
        //   }
        // } else {
        //   this.disableCheckinButton = false;
        // }
        if (datacheck.date !== this.currentDate && this.todayCheckinTime > 18) {
          this.CheckinoutDetails = {
            checkin: '-',
            checkout: '-',
            date: this.currentDate,
            status: 'Absent',
          };
          this.timestamp.checkindata(this.CheckinoutDetails);
          this.disableCheckinButton = true;
          this.disableCheckoutButton = false;
        }

        // if (datacheck.date == this.currentDate && datacheck.checkin) {
        //   this.disableCheckoutButton = true;
        // }
        // if (!datacheck.date) {
        //   this.disableCheckinButton = false;
        //   this.disableCheckoutButton = true;
        // }
      });
    });
  }
  public getCheckinTime() {
    this.todayDate = new Date();
    let day = this.todayDate.getDate();
    let month = this.todayDate.getMonth() + 1;
    let year = this.todayDate.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    this.currentDate = `${day}-${month}-${year}`;

    this.todayCheckinTime =
      this.todayDate.getHours() + ':' + this.todayDate.getMinutes();
    if (this.todayCheckinTime > '9:00' && this.todayDate.getHours > '18:00') {
      alert(
        'You cannot Checkin at this time, please checkin between 10am and 6pm'
      );
    } else {
      this.CheckinoutDetails = {
        checkin: this.todayCheckinTime,
        date: this.currentDate,
        status: 'Present',
      };
      this.timestamp.checkindata(this.CheckinoutDetails);
      this.disableCheckinButton = true;
      this.disableCheckoutButton = false;
    }
  }
  public getCheckoutTime() {
    this.todayDate = new Date();
    this.todayCheckoutTime =
      this.todayDate.getHours() + ':' + this.todayDate.getMinutes();

    if (this.todayDate.getHours < '18:00') {
      alert('You cannot Checkout before 6pm');
    } else {
      this.CheckinoutDetails = {
        checkout: this.todayCheckinTime,
        date: this.currentDate,
        status: 'Present',
      };
      this.timestamp.checkindata(this.CheckinoutDetails);
      this.disableCheckinButton = true;
      this.disableCheckoutButton = true;
    }

    console.log('checkout time is', this.todayCheckoutTime);
  }
}
