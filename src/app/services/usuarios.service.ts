import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from "src/environments/environment";


let headersReq = new HttpHeaders({
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET',
  'Access-Control-Allow-Origin': '*'
});

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(){
    return this.http.get( environment.apiURL+'users');
  }


  /**
   * De manteles largos
   */

  /**
   * Cumpleañeros del mes
   */


  /**
   * El mejor equipo
   */
  sendMejorEquipo(params){
    let url = environment.apiURL + "el-mejor-equipo";
    return this.http.post(url, params);
  }

  getMejorEquipo(){
    let url = environment.apiURL + "el-mejor-equipo-todos";
    return this.http.get(url);
  }
  /**
   * Premio a la excelencia
   */
  sendExcelencia(params){
    let url = environment.apiURL + "excelencia";
    return this.http.post(url, params);
  }

   /**
    * Tu historia, nuestra historia
    */
   sendProdeli(params){
    let url = environment.apiURL + "prodeli";
    return this.http.post(url, params);
  }

  getProdeli(){
    let url = environment.apiURL + "prodeli-todos";
    return this.http.get(url);
  }
}
