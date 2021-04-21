import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-tu-historia-nuestra-historia',
  templateUrl: './tu-historia-nuestra-historia.component.html',
  styleUrls: ['./tu-historia-nuestra-historia.component.css']
})
export class TuHistoriaNuestraHistoriaComponent implements OnInit {
  fileProdeli;
  titleProdeli;
  textProdeli;
  imgProdeli;


  imgExito;
  textExito;
  constructor(
    private userService: UsuariosService,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
  }

  handleUpload(event) {
    console.log('event', event)
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.fileProdeli = reader.result;
      
    };
  }

  guardarProdeli(){
    console.log('data save', this.fileProdeli, this.titleProdeli, this.textProdeli)
  
    if(this.textProdeli, this.fileProdeli, this.titleProdeli){
      let params = {
        text: this.textProdeli,
        image: this.fileProdeli,
        title: this.titleProdeli
      }
  
  
      this.userService.sendProdeli(params).subscribe(data => {
        console.log('data resp', data)
        this.toast.success(data['message']);
        this.fileProdeli = "";
        this.titleProdeli= ""; 
        this.textProdeli= "";
      })
  
    }else{
      this.toast.error('Llena los datos correspondientes')
    }

  }


  handleExito(event) {
    console.log('event', event)
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imgExito = reader.result;
      
    };
  }
}
