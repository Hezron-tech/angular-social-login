import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,public socialAuthService:SocialAuthService) { }

  ngOnInit(): void {
  }


  loginWithGoogle():void{
this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(()=>this.router.navigate(['home']))


  }
}
