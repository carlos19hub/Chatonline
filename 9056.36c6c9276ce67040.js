"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9056],{9056:(M,c,r)=>{r.r(c),r.d(c,{RegistroPageModule:()=>R});var d=r(9808),l=r(4182),t=r(6926),u=r(8186),e=r(5e3),p=r(6893);const m=[{path:"",component:(()=>{class o{constructor(n,i){this.auth=n,this.router=i}ngOnInit(){}onSubmitRegister(){this.auth.register(this.email,this.name,this.password).then(n=>{console.log(n),this.router.navigate(["/home"])}).catch(n=>console.log(n))}regresar(){this.router.navigate(["/login"])}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(p.e),e.Y36(u.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-registro"]],decls:24,vars:3,consts:[["color","primary"],[1,"ion-text-center"],["src","assets/icon/registro.png","alt","registro alternarivo",1,"icon"],["position","floating"],["type","text","name","name","id","nombre",3,"ngModel","ngModelChange"],["type","email","name","email","id","ema",3,"ngModel","ngModelChange"],["type","password","name","password","id","con",3,"ngModel","ngModelChange"],["color","secondary","expand","block",1,"espacios",3,"click"],[1,"espacioVertical"],["expand","block",1,"fondoColor","espacios",3,"click"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title")(3,"div",1),e._uU(4," registro "),e.qZA()()()(),e.TgZ(5,"ion-content"),e._UZ(6,"img",2),e.TgZ(7,"ion-item")(8,"ion-label",3),e._uU(9,"Nombre"),e.qZA(),e.TgZ(10,"ion-input",4),e.NdJ("ngModelChange",function(s){return i.name=s}),e.qZA()(),e.TgZ(11,"ion-item")(12,"ion-label",3),e._uU(13,"correo electronico"),e.qZA(),e.TgZ(14,"ion-input",5),e.NdJ("ngModelChange",function(s){return i.email=s}),e.qZA()(),e.TgZ(15,"ion-item")(16,"ion-label",3),e._uU(17,"contrase\xf1a"),e.qZA(),e.TgZ(18,"ion-input",6),e.NdJ("ngModelChange",function(s){return i.password=s}),e.qZA()(),e.TgZ(19,"ion-button",7),e.NdJ("click",function(){return i.onSubmitRegister()}),e._uU(20," Resgistrarse "),e.qZA(),e._UZ(21,"div",8),e.TgZ(22,"ion-button",9),e.NdJ("click",function(){return i.regresar()}),e._uU(23,"Ya tengo cuenta"),e.qZA()()),2&n&&(e.xp6(10),e.Q6J("ngModel",i.name),e.xp6(4),e.Q6J("ngModel",i.email),e.xp6(4),e.Q6J("ngModel",i.password))},directives:[t.Gu,t.sr,t.wd,t.W2,t.Ie,t.Q$,t.pK,t.j9,l.JJ,l.On,t.YG],styles:[""]}),o})()}];let h=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(m)],u.Bz]}),o})(),R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[d.ez,l.u5,t.Pc,h]]}),o})()}}]);