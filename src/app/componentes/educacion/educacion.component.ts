import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { Global } from 'src/app/common/global';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones: Educacion[]=[]; 
  public isLogin: boolean | undefined; 

  constructor(private educacionService: EducacionService) { }

  ngOnInit(): void {
    this.getEducaciones(); 
    this.isLogin = Global.isLogin; 
  }

  public getEducaciones():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[]) =>{
        this.educaciones = Response; 
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message); 
      }
    })
  }

}
