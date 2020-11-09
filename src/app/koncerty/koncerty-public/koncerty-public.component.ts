import { Component, OnInit, Input } from '@angular/core';
import { Koncert } from '../koncert';
import { KoncertyService } from '../koncerty.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-koncerty-public',
  templateUrl: './koncerty-public.component.html',
  styleUrls: ['./koncerty-public.component.css']
})
export class KoncertyPublicComponent implements OnInit {

  koncert: any = null;

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
      if (koncert.length > 0) {
        this.koncert = koncert;
      }
    });
  }

}
