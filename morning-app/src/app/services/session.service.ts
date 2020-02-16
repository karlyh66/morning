import { Injectable } from '@angular/core';
import { Session } from '../model/session';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  allSessionsRef: AngularFireList<any>;      // Reference to users list, Its an Observable
  sessionRef: AngularFireObject<any>;     // Reference to user object, Its an Observable too

  constructor(private db: AngularFireDatabase) { }

  // Add user
  AddSession(session: Session) {
    const sessionId = uuid.v4();
    this.sessionRef = this.db.object('sessions/' + sessionId);
    this.sessionRef.set({
      id: sessionId,
      user_id: session.user_id,
      pos_words: session.pos_words,
      neg_words: session.neg_words,
      sleep: 0,
      date: session.date
    })
  }

  GetSession(id: string) {
    this.sessionRef = this.db.object('sessions/' + id);
    return this.sessionRef;
  }

  // Read User List
  GetUserList() {
    this.allSessionsRef = this.db.list('sessions');
    return this.allSessionsRef;
  }

  // Update User
  UpdateSession(session: Session) {
    this.sessionRef = this.db.object('sessions/' + session.id);
    this.sessionRef.update({
      id: session.id,
      user_id: session.user_id,
      pos_words: session.pos_words,
      neg_words: session.neg_words,
      sleep: session.sleep,
      date: session.date
    })
  }

  // Delete Student
  DeleteStudent(id: string) {
    this.sessionRef = this.db.object('sessions/' + id);
    this.sessionRef.remove();
  }


}
