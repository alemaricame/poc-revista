import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  todos_usuarios: any = [];
  usuarios_: any = [];
  filter = new FormControl('');
  searchTerm: string;
  page = 1;
  pageSize = 20;
  collectionSize: number;
  currentRate = 8;
  // countries: Country[];
  // allCountries: Country[];

  constructor(
    private usuarios: UsuariosService
  ) { 
    this.getUsuarios();
  }

  ngOnInit(): void {
  }

  getUsuarios(){
    this.usuarios.getAllUsers().subscribe((data) => {
      this.collectionSize = data['data'].length;
      this.usuarios_ = data['data'];
      //this.allCountries = this.countries;
      this.todos_usuarios = data['data'];
      console.log("Los usuarios son: " + this.todos_usuarios)
    })
  }

  search(value: string): void {
    console.log(value)
    this.usuarios_ = this.todos_usuarios.filter((val) => val.empleado.toLowerCase().includes(value) || val.posicion.toLowerCase().includes(value) || val.unidad.toLowerCase().includes(value) || val.distrito.toLowerCase().includes(value));
    this.collectionSize = this.usuarios_.length;
  }

}
