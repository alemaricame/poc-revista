import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-de-manteles-largos',
  templateUrl: './de-manteles-largos.component.html',
  styleUrls: ['./de-manteles-largos.component.css']
})
export class DeMantelesLargosComponent implements OnInit {

  constructor(
    private usuarios: UsuariosService
  ) { 
    this.getAllUsers();
  }

  ngOnInit(): void {
  }

  getAllUsers(){
    this.usuarios.getAllUsers().subscribe(data => {
      console.log('data', data)
    })
  }

}
