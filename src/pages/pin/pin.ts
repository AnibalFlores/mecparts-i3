import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Operario } from '../../app/models/operario';
import { PinDialog } from '@ionic-native/pin-dialog';

@IonicPage()
@Component({
  selector: 'page-pin',
  templateUrl: 'pin.html'
})

export class PinPage {

  operarios: Operario[] = [];

  constructor(
    public dataSrv: DataServiceProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private pinDialog: PinDialog) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PinPage');
    this.dataSrv.getOperarios()
      .subscribe(
        (data: Operario[]) => { // Success
          this.operarios = data;
          //console.log(this.users);
        },
        (error) => {
          console.error(error);
        }
      );
    
  }

  validarOperario(id: number) {
    //apila otra pagina en la pila del historial
    //causa que el nav controller haga animacion de ingreso a pagina nueva
    this.pinDialog.prompt('Ingrese su PIN', 'Verifica PIN', ['OK', 'Cancelar'])
      .then(
        (result: any) => {
          if (result.buttonIndex == 1) {
            console.log('User clicked OK, value is: ', result.input1);
            this.navCtrl.push(PinPage);
          } // aca vamos a la pagina de destino nueva
          else if (result.buttonIndex == 2) console.log('User cancelled');
        }
      );

  }

  soyOtroOperario(){
    // TODO: otra page con la lista completa de operarios
    console.log('elegir otro operario');
  }

}
