import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


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
    return this.http.get('https://poc-server-heroku.herokuapp.com/api/example', { headers: headersReq });
  }
}
