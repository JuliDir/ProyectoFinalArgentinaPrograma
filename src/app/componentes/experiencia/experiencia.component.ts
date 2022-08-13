import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias: Experiencia[]=[];  

  constructor(private experienciaService: ExperienciaService, private autenticacionService: AutenticacionService) { }

  ngOnInit(): void {
    this.getExperiencias(); 
  }

  public getExperiencias():void{
    this.experienciaService.getExperiencia().subscribe({
      next:(Response: Experiencia[]) => {
        this.experiencias = Response; 
      },
      error: (error: HttpErrorResponse) =>{
        alert(error.message)
      }
    })
  }

  get isLogin(){
    return this.autenticacionService.UsuarioAutenticado; 
  }

}
