"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7766],{7766:(T,h,s)=>{s.r(h),s.d(h,{HomePageModule:()=>O});var l=s(9808),o=s(6926),g=s(4182),m=s(8186),p=s(655),t=s(5e3),u=s(3569);const d=["area"];function f(n,c){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=c.$implicit;t.xp6(1),t.Oqu(e.content)}}function C(n,c){if(1&n&&(t.TgZ(0,"ul"),t.YNc(1,f,2,1,"li",9),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.room.Messages)}}let _=(()=>{class n{constructor(e,i,a){this.navParams=e,this.modal=i,this.chatsService=a}ngOnInit(){this.chat=this.navParams.get("chat"),this.chatsService.getChat(this.chat.id).subscribe(e=>{this.room=e})}ngAfterViewChecked(){this.foco.setFocus()}closeChat(){this.modal.dismiss()}sendMensaje(){if(""!=this.msg){const e=JSON.parse(localStorage.getItem("usuario")),i={content:this.msg,type:e,date:new Date};this.chatsService.sendMsgToFireBase(i,this.chat.id),this.msg=""}else this.foco.setFocus()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(o.X1),t.Y36(o.IN),t.Y36(u.R))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-chat"]],viewQuery:function(e,i){if(1&e&&t.Gf(d,5),2&e){let a;t.iGM(a=t.CRH())&&(i.foco=a.first)}},decls:14,vars:3,consts:[["color","tertiary"],["slot","start","fill","clear",3,"click"],["name","close",2,"color","antiquewhite","font-size","25px"],["padding",""],[4,"ngIf"],[3,"ngModel","ngModelChange"],["area",""],["color","success","slot","end","onclick","sendMensaje()"],["name","send"],[4,"ngFor","ngForOf"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-button",1),t.NdJ("click",function(){return i.closeChat()}),t._UZ(3,"ion-icon",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5),t.qZA()()(),t.TgZ(6,"ion-content",3),t.YNc(7,C,2,1,"ul",4),t.qZA(),t.TgZ(8,"ion-footer",3)(9,"ion-item")(10,"ion-textarea",5,6),t.NdJ("ngModelChange",function(r){return i.msg=r}),t.qZA(),t.TgZ(12,"ion-button",7),t._UZ(13,"ion-icon",8),t.qZA()()()),2&e&&(t.xp6(5),t.Oqu(i.chat.name),t.xp6(2),t.Q6J("ngIf",i.room),t.xp6(3),t.Q6J("ngModel",i.msg))},directives:[o.Gu,o.sr,o.YG,o.gu,o.wd,o.W2,l.O5,l.sg,o.fr,o.Ie,o.g2,o.j9,g.JJ,g.On],styles:["ion-content[_ngcontent-%COMP%]{--background: #dae1e4}ion-card[_ngcontent-%COMP%]{--background: #ffffff}"]}),n})();var Z=s(6893);function M(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item",5),t.NdJ("click",function(){const r=t.CHM(e).$implicit;return t.oxw().openChat(r)}),t.TgZ(1,"ion-avatar",6),t._UZ(2,"ion-img",7),t.qZA(),t.TgZ(3,"ion-label")(4,"h2")(5,"b"),t._uU(6),t.qZA()(),t.TgZ(7,"p"),t._uU(8),t.qZA()()()}if(2&n){const e=c.$implicit;t.xp6(2),t.Q6J("src",e.img),t.xp6(4),t.Oqu(e.name),t.xp6(2),t.Oqu(e.description)}}const P=[{path:"",component:(()=>{class n{constructor(e,i,a,r){this.outService=e,this.modal=i,this.chatsService=a,this.actionSheetController=r,this.mensajes=[],this.chats=[]}salir(){this.outService.logout()}ngOnInit(){this.chatsService.getChatRooms().subscribe(e=>{this.chats=e})}Onlogout(){this.outService.logout()}openChat(e){this.modal.create({component:_,componentProps:{chat:e}}).then(i=>i.present())}presentActionSheet(){return(0,p.mG)(this,void 0,void 0,function*(){yield(yield this.actionSheetController.create({header:"Opciones",cssClass:"fondo",buttons:[{text:"Desconectarse",role:"destructive",icon:"log-out",handler:()=>{this.Onlogout()}}]})).present()})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z.e),t.Y36(o.IN),t.Y36(u.R),t.Y36(o.BX))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:9,vars:1,consts:[["color","tertiary"],["fill","clear","slot","end",3,"click"],["name","menu",2,"color","aliceblue","font-size","25px"],["padding",""],[")","",3,"click",4,"ngFor","ngForOf"],[")","",3,"click"],["slot","start"],[3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-button",1),t.NdJ("click",function(){return i.presentActionSheet()}),t._UZ(3,"ion-icon",2),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5," My chat App "),t.qZA()()(),t.TgZ(6,"ion-content",3)(7,"ion-list"),t.YNc(8,M,9,3,"ion-item",4),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("ngForOf",i.chats))},directives:[o.Gu,o.sr,o.YG,o.gu,o.wd,o.W2,o.q_,l.sg,o.Ie,o.BJ,o.Xz,o.Q$],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.fondo[_ngcontent-%COMP%]   .action-sheet-group[_ngcontent-%COMP%]{--background: yellow}"]}),n})()}];let v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.Bz.forChild(P)],m.Bz]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,g.u5,o.Pc,v]]}),n})()}}]);