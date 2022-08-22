import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Usuario } from 'src/app/models/usuario';
import { HeaderService } from 'src/app/servicios/header.service';

@Component({
  selector: 'app-usuario-edit-modal',
  templateUrl: './usuario-edit-modal.component.html',
  styleUrls: ['./usuario-edit-modal.component.css']
})
export class UsuarioEditModalComponent implements OnInit {

  public usuario: Usuario | undefined;
  editForm: FormGroup;
  isLoading = false;
  onCancel = false; 

  constructor(public modal: NgbActiveModal, private headerService: HeaderService, private formBuilder: FormBuilder, private router: Router) {
    this.editForm = this.formBuilder.group({
      nombre: [this.usuario?.nombre, Validators.required],
      apellido: [this.usuario?.apellido, Validators.required],
      titulo: [this.usuario?.titulo, Validators.required],
      subTitulo: [this.usuario?.subTitulo, Validators.required],
      descripcion: [this.usuario?.descripcion, Validators.required],
      fotoPerfil: [this.usuario?.fotoPerfil, [Validators.required, Validators.pattern(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)]],
    });
   }
 
  ngOnInit() {
  }
 
  onSubmit() {
    if ( this.onCancel || this.isLoading) {
      return;
    }
    this.isLoading = true;
    let us = this.editForm.value; 
    us.id = this.usuario?.id; 
    
    this.headerService.updateUsuario(us).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
 
  get nombre() {
    return this.editForm.get('nombre'); 
  }

  get titulo() {
    return this.editForm.get('titulo');
  }

  get descripcion(){
    return this.editForm.get('descripcion');
  }

  get apellido(){
    return this.editForm.get('apellido'); 
  }

  get fotoPerfil(){
    return this.editForm.get('fotoPerfil'); 
  }

}
