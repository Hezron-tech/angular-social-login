import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { GoogleLoginProvider } from 'angularx-social-login';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide:'SocialAuthServiceLogin',
      useValue:{
        autoLogin:true,

        providers:[
          {
            id:GoogleLoginProvider.PROVIDER_ID,
            provider:new GoogleLoginProvider('313706859602-ffbu7mjmg56482orkd2r8d1v53d0ftmr.apps.googleusercontent.com')
          }
        ]

      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
