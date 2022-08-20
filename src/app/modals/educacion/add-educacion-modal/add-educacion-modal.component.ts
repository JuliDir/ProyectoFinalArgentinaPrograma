import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-add-educacion-modal',
  templateUrl: './add-educacion-modal.component.html',
  styleUrls: ['./add-educacion-modal.component.css']
})
export class AddEducacionModalComponent implements OnInit {

  educacion: Educacion | undefined;
  editForm: FormGroup;
  isLoading = false;
  onCancel = false; 

  constructor(public modal: NgbActiveModal, private educacionService: EducacionService, private formBuilder: FormBuilder, private router: Router) {
    this.editForm = this.formBuilder.group({
      idEdu: [this.educacion?.idEdu],
      tituloEdu: [this.educacion?.tituloEdu, Validators.required],
      descEdu: [this.educacion?.descEdu, Validators.required],
      fechaInicioEdu: [this.educacion?.fechaInicioEdu, Validators.required],
      fechaFinEdu: [this.educacion?.fechaFinEdu, Validators.required],
      imagenEdu: [this.educacion?.imagenEdu, Validators.required],
      institutoEdu: [this.educacion?.institutoEdu, Validators.required]
    });
   }
 
  ngOnInit() {
  }
 
  onSubmit() {
    if (this.editForm.invalid || this.isLoading || this.onCancel) {
      return;
    }
    this.isLoading = true;

    let edu: Educacion = this.editForm.value; 
    edu.idEdu = Math.floor(Math.random());  

    this.educacionService.addEducacion(edu).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        alert(error.message)
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


