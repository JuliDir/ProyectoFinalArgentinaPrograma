import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-edit-educacion-modal',
  templateUrl: './edit-educacion-modal.component.html',
  styleUrls: ['./edit-educacion-modal.component.css']
})
export class EditEducacionModalComponent implements OnInit {
  public educacion: Educacion | undefined;
  editForm: FormGroup;
  isLoading = false;
  onCancel = false; 

  constructor(public modal: NgbActiveModal, private educacionService: EducacionService, private formBuilder: FormBuilder, private router: Router) {
    this.editForm = this.formBuilder.group({
      idEdu: [this.educacion?.tituloEdu],
      tituloEdu: [this.educacion?.tituloEdu, Validators.required],
      descEdu: [this.educacion?.descEdu, Validators.required],
      fechaInicioEdu: [this.educacion?.fechaInicioEdu, [Validators.required, Validators.pattern("[0-9]{4}")]],
      fechaFinEdu: [this.educacion?.fechaFinEdu, [Validators.required, Validators.pattern("[0-9]{4}")]],
      imagenEdu: [this.educacion?.imagenEdu, [Validators.required, Validators.pattern(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)]],
      institutoEdu: [this.educacion?.institutoEdu, Validators.required]
    });
   }
 
  ngOnInit() {
  }
 
  onSubmit() {
    if ( this.onCancel || this.isLoading) {
      return;
    }
    this.isLoading = true;
    let edu = this.editForm.value; 
    edu.idEdu = this.educacion?.idEdu; 
    console.log(edu); 

    this.educacionService.updateEducacion(edu).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
 
  get tituloEdu() {
    return this.editForm.get('tituloEdu'); 
  }

  get descEdu() {
    return this.editForm.get('descEdu');
  }

  get fechaInicioEdu(){
    return this.editForm.get('fechaInicioEdu');
  }

  get fechaFinEdu(){
    return this.editForm.get('fechaFinEdu'); 
  }

  get imagenEdu(){
    return this.editForm.get('imagenEdu'); 
  }

  get institutoEdu(){
    return this.editForm.get('institutoEdu'); 
  }

}
