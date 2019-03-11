import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReportePage } from '../reporte/reporte';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Reporte } from '../../app/models/reporte';

/**
 * Generated class for the NotaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nota',
  templateUrl: 'nota.html',
})
export class NotaPage {
  repo: Reporte;

  constructor(public dataSrv: DataServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.repo = this.dataSrv.reporte;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotaPage');
  }

  listo(){
    this.dataSrv.reporte = this.repo;
    this.navCtrl.push(ReportePage);
  }
}
