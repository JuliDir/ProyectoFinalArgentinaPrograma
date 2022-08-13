import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones: Educacion[]=[];  

  constructor(private educacionService: EducacionService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.getEducaciones();  
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

  isLogout() :boolean{
    return this.autenticacionService.isLogout(); 
  }

}
