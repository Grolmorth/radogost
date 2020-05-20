import { Component, OnInit } from '@angular/core';
import { Koncert } from '../koncert';
import { KoncertyService } from '../koncerty.service';

@Component({
  selector: 'app-konerty-create',
  templateUrl: './konerty-create.component.html',
  styleUrls: ['./konerty-create.component.css']
})
export class KonertyCreateComponent implements OnInit {

  koncert: Koncert = new Koncert();
  submitted = false;

  constructor(private koncertService: KoncertyService) { }

  ngOnInit() {
  }

  newKoncert(): void {
    this.submitted = false;
    this.koncert = new Koncert();
  }

  save() {
    this.koncertService.createKoncert(this.koncert);
    this.koncert = new Koncert();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
    console.log(this);
  }

}
