import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
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

  image_team;
  text_team;


  mejorEquipo: any = [];

  ///Excelencia
  imgExcelencia;
  nombreExcelencia;
  descripcionExcelencia;

  constructor(
    private usuarios: UsuariosService,
    private toast: ToastrService,
    private userService: UsuariosService,

  ) { 
    this.getAllUsers();
    this.obtenerEquipo();
  }

  ngOnInit(): void {
  }

  getAllUsers(){
    this.usuarios.getAllUsers().subscribe(data => {
      console.log('data', data)
      
    })
  }

  handleUpload(event) {
    console.log('event', event)
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.image_team = reader.result;
      
    };
  }
  guardarEquipo(){
    let params = {
      image: this.image_team,
      text: this.text_team
    }
    this.usuarios.sendMejorEquipo(params).subscribe(data => {
      console.log('data', data)
      this.toast.success(data['message'])
    })
  }

  obtenerEquipo(){
    this.usuarios.getMejorEquipo().subscribe(data => {
      console.log('el mejor equipo', data['data']);
      this.mejorEquipo = data['data'];
    })
  }


  handleUploadExcelencia(event) {
    console.log('event', event)
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgExcelencia = reader.result;
      
    };
  }

  guardarExcelencia(){
    /**
     * imgExcelencia;
        nombreExcelencia;
        descripcionExcelencia;
     */

    if(this.imgExcelencia && this.nombreExcelencia && this.descripcionExcelencia){
      let params = {
        nombre: this.nombreExcelencia,
        image: this.imgExcelencia,
        text: this.descripcionExcelencia
      }
  
  
      this.userService.sendExcelencia(params).subscribe(data => {
        console.log('data resp', data)
        this.toast.success(data['message']);
        this.imgExcelencia = "";
        this.nombreExcelencia= ""; 
        this.descripcionExcelencia= "";
      })
  
    }else{
      this.toast.error('Llena los datos correspondientes')
    }
  }

}
