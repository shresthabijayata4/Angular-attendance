import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root',
})
export class TimestampService {
  constructor(private firestore: AngularFirestore) {}

  public checkindata(checkin: any) {
    // var checkinObject = '{"name":"John", "age":30, "car":null}'
    // let checkinDetails: any = {
    //   checkin: checkin,
    //   date: date,
    // };
    this.firestore
      .collection('checkin')
      .add(checkin)
      .then(
        (res) => {
          // console.log('response', res);
          alert('Checkedin Successfully!1');
        },
        (err) => console.log(err)
      );
  }
  public getCheckinData() {
    return this.firestore
      .collection('checkin')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as any;
            // console.log('data123', data);
            data.id = a.payload.doc.id;
            return data;
          })
        )
      );
  }
}
