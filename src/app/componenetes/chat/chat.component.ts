import { Component, OnInit, ViewChild} from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { ChatsService } from '../../servicios/chats.service';
import { Mensaje } from './models/mensaje';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  @ViewChild('area') foco : any;
  
  public chat: any;
  public mensaje : string;
  public msg : string;
  public room : any;
  public name: string;



  constructor(
    private navParams : NavParams, 
    private modal : ModalController,
    private chatsService : ChatsService
    ) { }
  
  ngOnInit() {
    this.chat = this.navParams.get('chat');
    this.chatsService.getChat(this.chat.id).subscribe(r =>{
      this.room = r;
    })
  }

  ngAfterViewChecked(): void {
    this.foco.setFocus();
  }

  closeChat(){
    this.modal.dismiss();
  }

  sendMensaje(){
    if(this.msg!=""){
      const nombreUsu = JSON.parse(localStorage.getItem('usuario'));
      const m : Mensaje ={
        content : this.msg,
        type: nombreUsu,
        date: new Date()
      };
      this.chatsService.sendMsgToFireBase(m, this.chat.id);
      this.msg = "";
    }else{ 
      this.foco.setFocus();
    }
  }
}
