import { Injectable, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

import { Mensaje } from '../componenetes/chat/models/mensaje';



export interface chat {
  description : string 
  name : string
  id : string
  img : string
}

@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  

  constructor(private db : AngularFirestore) { 
  }

  /*
  return this.db.collection('chatRooms').snapshotChanges().pipe(map(rooms => {
    const data = a.payload.doc.data() as chat;
    
  })) 
  */

  getChatRooms(){
    return this.db.collection('chatRoom').valueChanges({idField: 'id'});
  }

  getChat(id : string){
    return this.db.collection('chatRoom').doc(id).valueChanges()
  }

  sendMsgToFireBase( mensaje : Mensaje, chat_id : string){
    mensaje.type = "text"
    this.db.collection('chatRoom').doc(chat_id).update({
      Messages : firebase.firestore.FieldValue.arrayUnion(mensaje),
    });
  }

}

