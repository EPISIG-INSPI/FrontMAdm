import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import environment from 'src/environments/environment';
import { UserModel, UserResponse } from '../model/user_model';

@Injectable({
  providedIn: 'root'
})
export class LoginService{

  // private urlLogin:string;
  public usuario:Promise<UserModel|null>;

  private eventUser:EventEmitter<UserModel>;

  constructor(
    // private http: HttpClient,
  ) {
    // this.urlLogin=`${environment.url}/login`
    this.eventUser= new EventEmitter<UserModel>();
    this.usuario=firstValueFrom(this.eventUser);
  }

  logIn(user:string, pass:string):UserResponse {
    this.eventUser.emit({username:user,password_hash:pass} as any)
    return {
      DATA:[
        {username:user,password_hash:pass} as any
      ]
    } as any
    // return this.http.get<UserResponse>(`${this.urlLogin}?user=${user}&pass=${pass}`)
  }

  // register(user:UserModel):Observable<UserResponse> {
  //   return this.http.post<UserResponse>(`${this.urlLogin}`,user)
  // }

  async getUsuario(){
    return await this.usuario;
  }

  logouUsuario(){
    this.usuario=firstValueFrom(this.eventUser);
  }

}
