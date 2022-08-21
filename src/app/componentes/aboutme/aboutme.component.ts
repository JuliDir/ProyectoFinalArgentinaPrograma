import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioEditModalComponent } from 'src/app/modals/usuario/usuario-edit-modal/usuario-edit-modal.component';
import { Usuario } from 'src/app/models/usuario';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public usuario:Usuario | undefined;

  constructor(private autenticacionService: AutenticacionService, private headerService:HeaderService, private modal: NgbModal) { }

  ngOnInit(): void { 
    this.getUsuario(); 
  }

  isLogout(){
    return this.autenticacionService.isLogout(); 
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

  editUsuario(){
    const ref = this.modal.open(UsuarioEditModalComponent, {centered: true, size: 'lg'});
    ref.componentInstance.usuario = this.usuario; 

    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        this.getUsuario(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        ref.componentInstance.onCancel = true; 
      }
  });
  }
  
}
