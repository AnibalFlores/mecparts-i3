import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { PreferenciasPage } from '../preferencias/preferencias';

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  id: number;
  listo = false;

  constructor(
    public dataSrv: DataServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dataSrv.getId().then((id) => {
      // TODO: aca una vez asignada la urlbase debe preguntarse
      // por el estado del terminal si en el servidor figura deslogueado o apagado
      // hacemos esto que es listar las maquinas asignadas al terminal
      // en cambio si el terminal figura logueado debemos saltar a la page de pap o mecanizando
      // con los datos vigentes (esto es así por si se apaga el tablet o falla la app,
      // igual en el server se mantenga la jornada y el estado de cada terminal)  
      this.id = id;
      this.dataSrv.getBaseUrl()
       .then(
         (url: String) => { 
           this.listo = true;
         },
         (error) => {
           console.error(error);
         }
       );
   })
  }

  empezar(){
    if (this.listo)
    this.navCtrl.push(HomePage);// estariamos con el terminar deslogueado
    // TODO: ver si el terminal ya tiene un operario logueado
    // vamos a un recovery page para accesar la info de la terminal
  }

  editarPreferencias() {
    // TODO: Poner un pin de seguridad para el administrador solamente
    this.navCtrl.push(PreferenciasPage);
  }
  
}
