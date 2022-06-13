import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public email: string;
  public password: string;
  public name: string;
  

  constructor(private auth : AuthService,
    public router : Router) { }

  ngOnInit() {
  }

  onSubmitRegister(){
    this.auth.register(this.email, this.name, this.password).then(
      auth => {
        console.log(auth)
        this.router.navigate(['/home']);
      }).catch(err => console.log(err));
  }


  regresar(){
    this.router.navigate(['/login']);
  }
}
