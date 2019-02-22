'use strict'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Parte } from '../../app/models/parte';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
// const baseURL = 'http://eb1b523c.ngrok.io'; // cuenta free de ngrok cambia siempre
// const baseURL = 'https://192.168.1.3:3000'; // con mkcert

const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

@Injectable()
export class DataServiceProvider {

  id: number;
  baseUrl: String;
  partes: Parte[] = [];
  maq: number;
  oper: number;
  part: number;

  constructor(private storage: Storage, public http: HttpClient) {
    // Leemos del dispositivo el id y la url base
    // TODO: verificar si estos datos no estan definidos para que lleve a la pagina de
    // preferencias con un formulario para editar dichos valores por el admin con una clave
    // local secreta para esa persona encargada de configurar las tablets
    this.storage.get('id').then((res) => { console.log(res); this.id = res; });
    this.storage.get('baseUrl').then((res) => {
       // console.log(res);
       this.baseUrl = res;
       this.getCodigos().subscribe((p: Parte[]) => { this.partes = p; console.log('Array lenght ' + this.partes.length); });
      });
    // console.log(this.baseUrl);

    
  }

  // Esta funcion es para setear en caso de cambiar los datos de conexion y nro de terminal
  // y no tener que reiniciar la app
  init(id: number, baseUrl: String) {
    this.id = id;
    this.baseUrl = baseUrl;
  }


  filtraPartes(Termino) {
    return this.partes.filter((parte) => {
      //return item.codigo.toLowerCase().indexOf(Termino.toLowerCase()) > -1;
       return parte.codigo.indexOf(Termino) > -1;
    });

  }

  getId() {
    return this.storage.get('id');
  }

  getBaseUrl() {
    return this.storage.get('baseUrl');
  }

  getOperarios() {
    return this.http.get(this.baseUrl + '/api/operarios');
  }

  getPartes() {
    return this.http.get(this.baseUrl + '/api/partes');
  }

  getCodigos() {
    return this.http.get(this.baseUrl + '/api/codigosdepartes');
  }

  getMaquinas() {
    return this.http.get(this.baseUrl + '/api/maquinas');
  }

  loginOperador(id: number, pin: String) {
    const body = { id: id, pin: pin };
    console.log(this.baseUrl + '/api/operariologin');
    console.log(body);
    return this.http.post(this.baseUrl + '/api/operariologin', body, httpOptions);

  }

}
