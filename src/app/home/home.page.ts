import { Component, OnInit} from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Observable } from 'rxjs';
import { ChatComponent } from '../componenetes/chat/chat.component';
import { ActionSheetController, ModalController } from '@ionic/angular';

import { ChatsService,chat } from '../servicios/chats.service';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

 // public chats : AngularFireList<any>;
  public bd : Observable<any[]>;  
  public mensajes: any=[];
  public chats : any =[];

  constructor(private outService : AuthService, 
              private modal: ModalController, 
              
              public chatsService : ChatsService,
              public actionSheetController: ActionSheetController 
              ){}

  salir(){
    this.outService.logout();
  }

  ngOnInit(): void {
    this.chatsService.getChatRooms().subscribe(chatBD => {
        this.chats = chatBD;
    });
  }
  
  Onlogout(){
    this.outService.logout();
  }
  
  openChat(chat:any){
    this.modal.create({
      component : ChatComponent,
      componentProps : {
        chat
      }
    }).then((modal) => modal.present());
  }

  async presentActionSheet(){
    const actionSheet = await this.actionSheetController.create({
      header: 'Opciones',
      cssClass: 'fondo',
      buttons: [{
        text: 'Desconectarse',
        role: 'destructive',
        icon: 'log-out',
        handler: () => {
          this.Onlogout();
        }
      }]
    });
    await actionSheet.present();
  }


}
