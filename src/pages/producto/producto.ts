import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Parte } from '../../app/models/parte';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { FormControl } from '@angular/forms';
import 'rxjs/add/operator/debounceTime';

@IonicPage()
@Component({
  selector: 'page-producto',
  templateUrl: 'producto.html',
})
export class ProductoPage {
  Termino: string = '';
  busquedaControl: FormControl;
  partes: Parte[] = [];
  buscando: any = false;

  constructor(public navCtrl: NavController, public dataSrv: DataServiceProvider) {
    this.busquedaControl = new FormControl();
  }

  ionViewDidLoad() {
      this.filtarPartes();
      this.busquedaControl.valueChanges.debounceTime(300).subscribe(buscar  => {
        this.buscando = false;
        this.filtarPartes();
        });
  }

  buscar(){
    this.buscando = true;
  }

  filtarPartes() {
      this.partes = this.dataSrv.filtraPartes(this.Termino);
  }

  seleccionaParte(id: number){
    console.log('Parte elegida: ' + id);
  }
}