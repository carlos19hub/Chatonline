import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import {Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authService : AuthService, 
    public router:Router,
    private db: AngularFirestore) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    //console.log('estas en la funcion')
    this.authService.login(this.email, this.password).then(resl =>{
      this.router.navigate(['/home']);
    }).catch(err => alert('Los datos son incorrectos o no existe el usuario'));
  }

  registro(){
    this.router.navigate(['/registro']);
  }


}
