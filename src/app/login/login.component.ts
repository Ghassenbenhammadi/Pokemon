import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  message: string = 'Vous êtes déconnecté. (pikachu/pikachu)';
  name: string;
  password: string;
  auth: AuthService;
  constructor(private authService: AuthService, 
    private router: Router){

  }
  ngOnInit() {
    this.auth = this.authService;
  }
  setMessage(){
if(this.authService.isloggedIn){
  this.message ='Vous etes connecté';
} else {
  this.message = 'Identifiant ou mot de passe incorrect'
}
  }
  login(){
this.message ='Tantative de connexion en cours...';
this.authService.login(this.name,this.password).subscribe((isloggedIn : boolean)=> {
  this.setMessage();
  if(isloggedIn)
  {
    this.router.navigate(['/pokemons']);
  } else{
    this.password='';
    this.router.navigate(['/login']);
  }
 
})
  }
  logout(){
  this.authService.logout();
  this.message='Vous etes déconnecté.'
  }

}
