import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/model/user_model';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  usuario!:UserModel|null;

  constructor(
    private loginService:LoginService,
    private router:Router,
  ){
  }
  async ngOnInit(): Promise<void> {
    this.usuario=await this.loginService.usuario;
  }

  async logout(){
    this.router.navigate(['/login']);
    this.loginService.logouUsuario();
    this.usuario=null
    this.usuario=await this.loginService.usuario;
  }
}
