import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-de-manteles-largos',
  templateUrl: './de-manteles-largos.component.html',
  styleUrls: ['./de-manteles-largos.component.css']
})
export class DeMantelesLargosComponent implements OnInit {
  datos = [
    {
      'imagen': 'https://picsum.photos/200/300?random=1',
      'nombre': 'Nombre',
      'descripcion': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
    },
    {
      'imagen': 'https://picsum.photos/200/300?random=1',
      'nombre': 'Nombre',
      'descripcion': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
    },
    {
      'imagen': 'https://picsum.photos/200/300?random=1',
      'nombre': 'Nombre',
      'descripcion': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
    },
    {
      'imagen': 'https://picsum.photos/200/300?random=1',
      'nombre': 'Nombre',
      'descripcion': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
    },
    {
      'imagen': 'https://picsum.photos/200/300?random=1',
      'nombre': 'Nombre',
      'descripcion': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '
    }
  ]
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
