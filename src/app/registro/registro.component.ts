import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistroService } from '../service/registro.service';
import { Router } from '@angular/router';
import { User } from '../dto/structure_class';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent  {
  form: FormGroup
  rol=2;
  constructor(private fb: FormBuilder, private register: RegistroService, private router: Router) {
    
    this.form = fb.group({
      identificationNumber: [null, Validators.compose([Validators.required])],
      names: [null, Validators.compose([Validators.required])],
      username: [null, Validators.compose([Validators.required])],
      password: [null, Validators.compose([Validators.required])]
    })
  }
  ngOnInit() {
  }
  
  InsertRegister() {
    this.register.Registro(new User(
      this.form.value.identificationNumber,
      this.form.value.names,
      this.form.value.username,
      this.form.value.password,
      this.rol)).subscribe(
        (res) => {
          alert(res['message'])
          console.log(res['message']);
          sessionStorage.setItem('user', "2");
          this.router.navigate(['/opciones']);
        },
        (error) => {
          alert(error.error.message)
          console.log(error.error.message);
        }
  )}
}