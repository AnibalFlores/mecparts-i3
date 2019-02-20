import { WelcomePage } from './../pages/welcome/welcome';
import { PinPage } from './../pages/pin/pin';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PinDialog } from '@ionic-native/pin-dialog';
import { DataServiceProvider } from '../providers/data-service/data-service';
import { PreferenciasPage } from '../pages/preferencias/preferencias';


@NgModule({
  declarations: [
    MyApp,
    WelcomePage,
    HomePage,
    PinPage,
    PreferenciasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    WelcomePage,
    HomePage,
    PinPage,
    PreferenciasPage
  ],
  providers: [
    StatusBar,
    DataServiceProvider,
    SplashScreen,
    PinDialog,
    {provide: ErrorHandler, useClass: IonicErrorHandler}    
  ]
})
export class AppModule {}
