import { Injectable } from '@angular/core';

import { Koncert } from './koncert';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class KoncertyService {



  private dbPath = '/koncerty';

  koncertRef: AngularFirestoreCollection<Koncert> = null;

  constructor(private db: AngularFirestore) {
    this.koncertRef = db.collection(this.dbPath);
  }

  createKoncert(koncert: Koncert): void {
    const param = JSON.parse(JSON.stringify(koncert));
    this.koncertRef.add(param).then(_ => alert('dodano koncert!'));
  }

  deleteKoncert(key: string): Promise<void> {
    return this.koncertRef.doc(key).delete();
  }

  getKoncertList(): AngularFirestoreCollection<Koncert> {
    return this.koncertRef;
  }

}
