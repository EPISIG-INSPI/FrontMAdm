import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
declare var $: any;

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  activeTab:string="principal"
  
  formGroupPrincipal:FormGroup = new PrincipalFormGroup().formGroup
  listaPrincipal:PrincipalModel[]=[]

  constructor(){

  }

  //PRINCIPAL
  abrirModalPrincipal(){
    this.formGroupPrincipal = new PrincipalFormGroup().formGroup
    $("#nuevoModal").modal("show")
  }

  guardarModalPrincipal(){
    this.formGroupPrincipal.markAllAsTouched()
    if (this.formGroupPrincipal.valid) {
      this.listaPrincipal.push(this.formGroupPrincipal.value);
      this.cerrarModalPrincipal()
    }else{
      Swal.fire({
        title:"Formulario incompleto",
        icon:"warning",
        confirmButtonText: 'Aceptar',
      })
    }
  }

  cerrarModalPrincipal(){
    $("#nuevoModal").modal("hide");
    }

    //PRS

    abrirModalPRS(){
      this.formGroupPrincipal = new PrincipalFormGroup().formGroup
      $("#nuevoModal").modal("show")
    }
  
    guardarModalPRS(){
      this.formGroupPrincipal.markAllAsTouched()
      if (this.formGroupPrincipal.valid) {
        this.listaPrincipal.push(this.formGroupPrincipal.value);
        this.cerrarModalPRS()
      }else{
        Swal.fire({
          title:"Formulario incompleto",
          icon:"warning",
          confirmButtonText: 'Aceptar',
        })
      }
    }

    cerrarModalPRS(){
      $("#nuevoModal").modal("hide");
      }


  validarEstado(campo:string, form:FormGroup):string{
    return form.controls[campo].touched?
              (
                form.controls[campo].valid?
                  "is-valid":
                  "is-invalid"
              ):
              ""
  }

  obtenerEstadoCivil(valor:string):string{
    switch(valor){
      case "S":
        return "Soltero"
      case "C":
        return "Casado"
      case "D":
        return "Divorsiado"
      case "V":
        return "Viudo"
      case "U":
        return "Union Libre"
    }
    return ""
  }
}

//PRINCIPAL
interface PrincipalModel{
  nombres:string;
  apellidos:string,
  cedula:string,
  estadoCivil:string,
  telefono:string,
  direccion:string,
  relacionLaboral:string;
}

class PrincipalFormGroup{
  formGroup:FormGroup=new FormGroup({
    nombres: new FormControl(null,[Validators.required]),
    apellidos: new FormControl(null,[Validators.required]),
    cedula: new FormControl(null,[Validators.required]),
    estadoCivil: new FormControl(null,[Validators.required]),
    telefono: new FormControl(null,[Validators.required]),
    direccion: new FormControl(null,[Validators.required]),
    relacionLaboral: new FormControl(null,[Validators.required])
  })
}

//PRS
interface PRSModel{
  nombres:string;
  apellidos:string,
  cedula:string,
  estadoCivil:string,
  telefono:string,
  direccion:string,
  relacionLaboral:string;
}

class PRSFormGroup{
  formGroup:FormGroup=new FormGroup({
    nombres: new FormControl(null,[Validators.required]),
    apellidos: new FormControl(null,[Validators.required]),
    cedula: new FormControl(null,[Validators.required]),
    estadoCivil: new FormControl(null,[Validators.required]),
    telefono: new FormControl(null,[Validators.required]),
    direccion: new FormControl(null,[Validators.required]),
    relacionLaboral: new FormControl(null,[Validators.required])
  })
}