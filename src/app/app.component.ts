import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { WelcomePage } from '../pages/welcome/welcome';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = WelcomePage;

  constructor(
    platform: Platform,
     statusBar: StatusBar,
      private splashScreen: SplashScreen,
       private storage: Storage
       ) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      this.storage.ready().then(() => { this.splashScreen.hide(); });

    });
  }
}

