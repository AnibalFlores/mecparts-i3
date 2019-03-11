import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { Operario } from '../../app/models/operario';
import { PinDialog } from '@ionic-native/pin-dialog';
import { Dialogs } from '@ionic-native/dialogs';
import { ProductoPage } from '../producto/producto';



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
    private dialogs: Dialogs,
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

  validarOperario(ope: Operario) {
    // apila otra pagina en la pila del historial
    // causa que el nav controller haga animacion de ingreso a pagina nueva
    this.pinDialog.prompt('Ingrese su PIN', 'Verifica PIN', ['OK', 'Cancelar'])
      .then(
        (result: any) => {
          if (result.buttonIndex == 1) {
            console.log('Usuario'+ ope.id +' dio OK, el pin es: ', result.input1);
            this.dataSrv.loginOperador(ope.id, result.input1)
              .subscribe((res: any) => {
                console.log(res);
                if (res) {
                  this.dataSrv.oper = ope; // guardamos el operario en el dataservice
                  this.navCtrl.push(ProductoPage);// aca vamos a la pagina de destino nueva
                  // console.log('Pin correcto debemos saltar a otra page');
                }
                else {
                  // console.log('Pin incorrecto debemos mostrar mensaje');
                  this.dialogs.alert('Pin Incorrecto\nreintente o consulte con administración','Atención')
                  .then(() => console.log('Dialogo cerrado'))
                  .catch(e => console.log('Error mostrando mensaje', e));
                
                }
              })
          } 
          else if (result.buttonIndex == 2) console.log('Usuario cancelo ingreso de pin');
        }
      );

  }

  soyOtroOperario() {
    // TODO: otra page con la lista completa de operarios
    console.log('elegir otro operario');
  }

}
