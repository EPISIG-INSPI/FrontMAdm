import { Component, Input, Output, AfterViewInit, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-olvidar-contra',
  templateUrl: './olvidar-contra.component.html',
  styleUrls: ['./olvidar-contra.component.css']
})
export class OlvidarContraComponent implements AfterViewInit {
  @Input() email:string="";
  @Output() onEnviar:EventEmitter<boolean>=new EventEmitter();

  controlEmail:FormControl=new FormControl();

  constructor() {

  }

  ngAfterViewInit(): void {
      this.controlEmail = new FormControl(this.email,[Validators.required])
  }

  enviarEmail(){
    console.log("Enviar correo");
    Swal.fire({
      title: 'Correo enviado correctamente',
      text: 'Porfavor revise su correo',
      icon: 'success',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar'
    });
    this.onEnviar.emit(true);
  }

  validarEstado(campo:FormControl){
    return campo.touched?
            (
              campo.valid?
                "is-valid":
                "is-invalid"
            ):'';
  }

}
