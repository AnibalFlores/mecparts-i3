import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Labor } from '../../app/models/labor';
import { ReportePage } from '../reporte/reporte';
import { DataServiceProvider } from '../../providers/data-service/data-service';

/**
 * Generated class for the MecanizadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mecanizado',
  templateUrl: 'mecanizado.html',
})
export class MecanizadoPage {
  labor: Labor;

  constructor(public dataSrv: DataServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.labor = new Labor();
    this.labor.id = 1;
    this.labor.maquina = this.dataSrv.maq; // recuperamos la maquina del dataservice
    this.labor.operario = this.dataSrv.oper; // recuperamos el operador del dataservice
    this.labor.parte = this.dataSrv.part; // recuperamos la parte del dataservice
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MecanizadoPage');
  }

  irreporte(){
    this.navCtrl.push(ReportePage);
  }
}
