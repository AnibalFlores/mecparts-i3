import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// const baseURL = 'http://eb1b523c.ngrok.io'; // cuenta free de ngrok cambia siempre
// const baseURL = 'https://192.168.1.3:3000'; // con mkcert
@Injectable()
export class DataServiceProvider {
 id: number;
 baseUrl: String;

  constructor(private storage: Storage, public http: HttpClient) {
    // Leemos del dispositivo el id y la url base
    // TODO: verificar si estos datos no estan definidos para que lleve a la pagina de
    // preferencias con un formulario para editar dichos valores por el admin con una clave
    // local secreta para esa persona encargada de configurar las tablets
    this.storage.get('id').then((res) => { console.log(res); this.id = res; });
    this.storage.get('baseUrl').then((res) => { console.log(res); this.baseUrl = res; });
    console.log(this.baseUrl);   
  }

  // Esta funcion es para setear en caso de cambiar los datos de conexion y nro de terminal
  // y no tener que reiniciar la app
  init(id:number, baseUrl: String){
    this.id = id;
    this.baseUrl = baseUrl;
  }

  getId(){
    return this.storage.get('id');
  }

  getBaseUrl(){
    return this.storage.get('baseUrl');
  }

  getOperarios() {
    return this.http.get(this.baseUrl + '/api/operarios');  
  }

  getMaquinas(){
    return this.http.get(this.baseUrl + '/api/maquinas');
  }
  
}
