import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from '../../globals/services/session.service';
import { AuthService } from '../../globals/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:FormGroup;
  inputType:String='password';
  loginError:boolean;
  constructor(
    private formBuilder:FormBuilder,
    private sessionService:SessionService,
    private authService:AuthService,
    private router:Router) { }

  ngOnInit(): void {

    this.form=this.formBuilder.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    });
  }

  togglePasswordView(){
    this.inputType=this.inputType==='password' ? 'text' : 'password';
  }
  login(){
    console.log("Iniciar sesion",this.form.getRawValue());
    this.sessionService.login(this.form.getRawValue()).then(response=>{
      console.log('Inicio sesion',response);
      this.authService.save(response);
      this.loginError=false;
      this.router.navigate(['/titulares']);

    }).catch(err=>{
      this.loginError=true;
    })
  }
}
