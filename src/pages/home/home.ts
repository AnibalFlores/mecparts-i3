import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PinPage } from '../pin/pin';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Maquina } from '../../app/models/maquina';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  id: number;
  maquinas: Maquina[];

  constructor(
    public dataSrv: DataServiceProvider,
    public navCtrl: NavController) {
    this.id = this.dataSrv.id;
  }

  ionViewDidLoad() {
    this.dataSrv.getMaquinas()
        .subscribe(
          (data: Maquina[]) => { 
            this.maquinas = data;
          },
          (error) => {
            console.error(error);
          }
        );
  }

  loguearOperador(maq: Maquina) {
    // TODO: verificamos que este seleccionada una maquina de la lista
    // radio button y pasamos a la pagina de pin de operador
    // sino mostramos error para que seleccione una maquina primero
    console.log('Máquina elegida: ' + maq.id);
    this.dataSrv.maq = maq;// guardamos la maquina elegida en el dataservice
    this.navCtrl.push(PinPage);
  }



}
