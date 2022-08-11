import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { Global } from 'src/app/common/global'

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias: Experiencia[]=[]; 
  public isLogin: boolean | undefined; 

  constructor(private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
    this.getExperiencias(); 
    this.isLogin = Global.isLogin; 
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

}
