import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormPage } from '../pages/form/form';
import { LoginPage } from '../pages/login/login';
import { RegistrarUsuarioPage } from '../pages/registrarUsuario/registrarUsuario'; 
import { ModificarUsuarioPage } from '../pages/modificarUsuario/modificarUsuario';
import { RegistrarBarPage } from '../pages/registrarBar/registrarBar';
import { AdministrarBaresPage } from '../pages/administrarBares/administrarBares';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule } from '@angular/common/http';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { BarServiceProvider } from '../providers/bar-service/bar-service';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormPage,
    LoginPage,
    RegistrarUsuarioPage,
    ModificarUsuarioPage,
    RegistrarBarPage,
    AdministrarBaresPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormPage,
    LoginPage,
    RegistrarUsuarioPage,
    ModificarUsuarioPage,
    RegistrarBarPage,
    AdministrarBaresPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserServiceProvider,
    BarServiceProvider
  ]
})
export class AppModule {}
