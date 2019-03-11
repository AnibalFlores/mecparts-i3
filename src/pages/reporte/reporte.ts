import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { WelcomePage } from '../welcome/welcome';
import { NotaPage } from '../nota/nota';
import { Reporte } from '../../app/models/reporte';

/**
 * Generated class for the ReportePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reporte',
  templateUrl: 'reporte.html',
})
export class ReportePage {
  repo: Reporte;

  constructor(public dataSrv: DataServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.repo = this.dataSrv.reporte;
    if (!this.repo.mecanizadas) {
      this.repo.mecanizadas = 0;
      this.repo.aptas = 0;
      this.repo.rechazos = 0;
      this.repo.terminadas = true;
      this.repo.aterminar = false;
      this.repo.nota = "";
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportePage');
  }

  irfinalizar() {
    this.dataSrv.reporte = this.repo;
    console.log(this.repo);
    this.navCtrl.push(WelcomePage);

  }

  irnotas() {
    this.dataSrv.reporte = this.repo;
    this.navCtrl.push(NotaPage);

  }
}
