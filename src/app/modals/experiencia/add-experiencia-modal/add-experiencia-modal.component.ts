import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-add-experiencia-modal',
  templateUrl: './add-experiencia-modal.component.html',
  styleUrls: ['./add-experiencia-modal.component.css']
})
export class AddExperienciaModalComponent implements OnInit {

  experiencia: Experiencia | undefined;
  editForm: FormGroup;
  isLoading = false;
  onCancel = false; 

  constructor(public modal: NgbActiveModal, private experienciaService: ExperienciaService, private formBuilder: FormBuilder, private router: Router) {
    this.editForm = this.formBuilder.group({
      idExp: [this.experiencia?.idExp],
      nombreExp: [this.experiencia?.nombreExp, Validators.required],
      tituloExp: [this.experiencia?.tituloExp, Validators.required],
      fechaInicioExp: [this.experiencia?.fechaInicioExp, [Validators.required, Validators.pattern("[0-9]{4}")]],
      fechaFinExp: [this.experiencia?.fechaFinExp, [Validators.required, Validators.pattern("[0-9]{4}")]],
      imagenExp: [this.experiencia?.imagenExp, [Validators.required, Validators.pattern(/(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/)]],
      descExp: [this.experiencia?.descExp, Validators.required]
    });
   }
 
  ngOnInit() {
  }
 
  onSubmit() {
    if (this.editForm.invalid || this.isLoading || this.onCancel) {
      return;
    }
    this.isLoading = true;

    let exp: Experiencia = this.editForm.value; 
    exp.idExp = Math.floor(Math.random());  

    this.experienciaService.addExperiencia(exp).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        alert(error.message)
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
