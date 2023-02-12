import { Component, OnInit } from '@angular/core';
import { TimestampService } from '../shared/timestamp.service';

@Component({
  selector: 'app-attendance-summary',
  templateUrl: './attendance-summary.component.html',
  styleUrls: ['./attendance-summary.component.css'],
})
export class AttendanceSummaryComponent implements OnInit {
  statusDetails: any;
  constructor(private timestamp: TimestampService) {}

  ngOnInit(): void {
    this.getStatus();
  }

  public getStatus() {
    this.timestamp.getCheckinData().subscribe((stausresponse: any) => {
      this.statusDetails = stausresponse;
      console.log(this.statusDetails);

      // stausresponse.forEach((status: any) => {
      //   this.statusDetails = status;
      //   console.log(this.statusDetails);
      // });
    });
  }
}
