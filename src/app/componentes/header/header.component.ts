import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/servicios/header.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service'
import { EventService } from 'src/app/servicios/event.service';

 declare function navAnimation(): any; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario | undefined; 
  public editUsuario: Usuario | undefined; 
     

  constructor(private headerService: HeaderService, private ruta:Router, private autenticacionService: AutenticacionService,
    eventService:EventService) { 
      eventService.$emitter.subscribe(() => {
          this.getUsuario(); 
      }); 
  }

  ngOnInit(): void {
    navAnimation(); 
    this.getUsuario(); 
  }

  public getUsuario(): void{
    this.headerService.getUsuario().subscribe({
      next: (response: Usuario) => {
        this.usuario = response;
      },
      error: (error:HttpErrorResponse) =>{
        alert(error.message);
      }
    })
  }

  onLogout(event: Event){
    event.preventDefault; 
    this.autenticacionService.CerrarSesion(); 
    window.location.reload(); 
  }

  isLogout(): boolean{
    return this.autenticacionService.isLogout(); 
  }

  
}
