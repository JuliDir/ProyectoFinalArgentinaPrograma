import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Global } from 'src/app/common/global';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AutenticacionService, private ruta:Router) { 
    this.form = this.formBuilder.group({
        email:['',[Validators.required, Validators.email]],
        password:['',[Validators.required, Validators.minLength(6)]]
    }
    )
  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email');
  }

  get Password(){
    return this.form.get('password'); 
  }

  onLogin(event:Event){
    event.preventDefault;
    this.authService.IniciarSesion(this.form.value).subscribe(data =>{
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/home']); 
      Global.isLogin = true; 
    })
  }


}
