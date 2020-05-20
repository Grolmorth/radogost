import { Component, OnInit, Input } from '@angular/core';
import { Koncert } from '../koncert';
import { KoncertyService } from '../koncerty.service';

@Component({
  selector: 'app-konerty-edit',
  templateUrl: './konerty-edit.component.html',
  styleUrls: ['./konerty-edit.component.css']
})
export class KonertyEditComponent implements OnInit {

  @Input() koncert: Koncert;

  constructor(private koncertsService: KoncertyService) { }

  ngOnInit(): void {
  }

  deleteKoncert() {
    this.koncertsService
      .deleteKoncert(this.koncert.key)
      .catch(err => console.log(err));
    console.log(this);
  }

}
