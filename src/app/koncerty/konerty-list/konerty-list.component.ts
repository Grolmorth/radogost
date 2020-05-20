import { Component, OnInit } from '@angular/core';
import { KoncertyService } from '../koncerty.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-konerty-list',
  templateUrl: './konerty-list.component.html',
  styleUrls: ['./konerty-list.component.css']
})
export class KonertyListComponent implements OnInit {

  koncert: any;

  constructor(private koncertService: KoncertyService) { }

  ngOnInit() {
    this.getKoncertList();
  }

  getKoncertList() {
    this.koncertService.getKoncertList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(koncert => {
      this.koncert = koncert;
    });
  }

}
