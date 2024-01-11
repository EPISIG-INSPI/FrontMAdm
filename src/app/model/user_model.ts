import { FormControl, FormGroup, Validators } from "@angular/forms";

export interface UserModel {
  id: number;
  username: string;
  email: string;
  password_hash: string;
}

export interface UserResponse {
  STATUS:string,
  MESSAGE:string,
  DATA:UserModel[]
}

export class UserForm extends FormGroup{
  constructor() {
    super({
      email:new FormControl(null,Validators.required),
      password:new FormControl(null,Validators.required),
      username:new FormControl(null),
      name:new FormControl(null),
      phone:new FormControl(null),
    });
  }
}

export class RegisterForm extends FormGroup{
  constructor() {
    super({
      name:new FormControl(null,Validators.required),
      username:new FormControl(null,Validators.required),
      email:new FormControl(null,[Validators.required,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
      password:new FormControl(null,Validators.required),
      phone:new FormControl(null),
    });
  }
}
