import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-edit-experiencia-modal',
  templateUrl: './edit-experiencia-modal.component.html',
  styleUrls: ['./edit-experiencia-modal.component.css']
})
export class EditExperienciaModalComponent implements OnInit {

  public experiencia: Experiencia | undefined;
  editForm: FormGroup;
  isLoading = false;
  onCancel = false; 

  constructor(public modal: NgbActiveModal, private experienciaService: ExperienciaService, private formBuilder: FormBuilder, private router: Router) {
    this.editForm = this.formBuilder.group({
      idExp: [this.experiencia?.idExp],
      nombreExp: [this.experiencia?.nombreExp, Validators.required],
      tituloExp: [this.experiencia?.tituloExp, Validators.required],
      fechaInicioExp: [this.experiencia?.fechaInicioExp, Validators.required],
      fechaFinExp: [this.experiencia?.fechaFinExp, Validators.required],
      imagenExp: [this.experiencia?.imagenExp, Validators.required],
      descExp: [this.experiencia?.descExp, Validators.required]
    });
   }
 
  ngOnInit() {
  }
 
  onSubmit() {
    if ( this.onCancel || this.isLoading) {
      return;
    }
    this.isLoading = true;
    let exp = this.editForm.value; 
    exp.idExp = this.experiencia?.idExp; 
    console.log(exp); 

    this.experienciaService.updateExperiencia(exp).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
 
  get nombreExp() {
    return this.editForm.get('nombreExp'); 
  }

  get tituloExp() {
    return this.editForm.get('tituloExp');
  }

  get fechaInicioExp(){
    return this.editForm.get('fechaInicioExp');
  }

  get fechaFinExp(){
    return this.editForm.get('fechaFinExp'); 
  }

  get imagenExp(){
    return this.editForm.get('imagenExp'); 
  }
 
  get descExp(){
    return this.editForm.get('descExp'); 
  }

}
