import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/servicios/header.service';

 declare function navAnimation(): any; 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public usuario: Usuario | undefined; 
  public editUsuario: Usuario | undefined; 

  constructor(private headerService: HeaderService) { }

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

 

}
