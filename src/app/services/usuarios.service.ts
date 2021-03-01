import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllUsers(){
    return this.http.get('http://localhost:3000/api/users');
  }
}
