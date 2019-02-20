import { WelcomePage } from './../welcome/welcome';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-preferencias',
  templateUrl: 'preferencias.html',
})
export class PreferenciasPage {
  todo: FormGroup;

  constructor(
    public dataSrv: DataServiceProvider,
    private fb: FormBuilder,
    private storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams) {

    this.todo = this.fb.group({
      terminal: ['', Validators.required],
      baseUrl: ['', Validators.required],
    });
  }

  ionViewDidLoad() {
    this.storage.get('id').then((res) => { console.log(res); this.todo.controls['terminal'].setValue(res); });
    this.storage.get('baseUrl').then((res) => { console.log(res); this.todo.controls['baseUrl'].setValue(res); });
  }

  guardaForm() {
    // console.log(this.todo.value.terminal);
    // console.log(this.todo.value.baseUrl);
    this.storage.set('id', this.todo.value.terminal);
    this.storage.set('baseUrl', this.todo.value.baseUrl);
    // cambiamos los valores en el service 
    this.dataSrv.init(this.todo.value.terminal, this.todo.value.baseUrl)
    // volvemos a la pagina de bienvenida
    this.navCtrl.push(WelcomePage);
  }

}
