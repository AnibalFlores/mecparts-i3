import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Labor } from '../../app/models/labor';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { MecanizadoPage } from '../mecanizado/mecanizado';
import { PapPage } from '../pap/pap';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the OciosoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ocioso',
  templateUrl: 'ocioso.html',
})
export class OciosoPage {
  labor : Labor;

  constructor( public dataSrv: DataServiceProvider,public navCtrl: NavController, public navParams: NavParams) {
    this.labor = new Labor();
    this.labor.id = 1;
    this.labor.maquina = this.dataSrv.maq; // recuperamos la maquina del dataservice
    this.labor.operario = this.dataSrv.oper; // recuperamos el operador del dataservice
    this.labor.parte = this.dataSrv.part; // recuperamos la parte del dataservice

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OciosoPage');
  }

  irpap(){
    this.navCtrl.push(PapPage);
  }

  irmecanizar(){
    this.navCtrl.push(MecanizadoPage);
  }

  irprincipio(){
    this.navCtrl.push(WelcomePage); 
  }
}
