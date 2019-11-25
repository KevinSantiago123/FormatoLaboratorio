import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Login } from '../dto/structure_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  constructor(private fb:FormBuilder, private loggin: LoginService, private router: Router) { 
    
    this.form = fb.group({
      username: [null,Validators.compose([Validators.required])],
      password: [null,Validators.compose([Validators.required,Validators.minLength(5)])]
    })
  }
  ngOnInit() {
  }
  Login (){
    this.loggin.Login(new Login (this.form.value.username,this.form.value.password)).subscribe(
      (res) => {
        console.log(res['message']);
        if(res['message'] == 'usuario inicia sesión correctamente'){
          sessionStorage.setItem('user', "1");
          this.router.navigate(['/opciones']);
        }
        else{
          alert(res['message'])
        }
      },
      (error) => {
        alert(error.error.message)
        console.log(error.error.message);
      }
    )
    // console.log(this.form)
  }
  Registrarse (){
    this.router.navigate(['/registro']);
  }

}
