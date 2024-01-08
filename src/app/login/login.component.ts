import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
}
)

export class LoginComponent {

formLogin:FormGroup=new FormGroup({
  email:new FormControl(null,[Validators.required]),
  pass:new FormControl(null,[Validators.required]),
})

olvidarContra:boolean=false;


constructor (private router:Router){}

showErrorMessage: boolean = false;

login(){
  this.formLogin.markAllAsTouched();
  if (this.formLogin.valid) {
    // Realizar la autenticación aquí
    console.log('Iniciar sesión');
    this.router.navigate(['/home/personal']);
  } else {
    console.log('fallo');
    this.showErrorMessage = true;
  }
}

togglePassword() {
  var passwordInput = document.getElementById('passwordInput') as HTMLInputElement;
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
}

validarEstado(campo:string,lista:FormGroup){
  return lista.controls[campo].touched?
          (
            lista.controls[campo].valid?
              "is-valid":
              "is-invalid"
          ):'';
}

}




