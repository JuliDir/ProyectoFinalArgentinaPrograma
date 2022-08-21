import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-edit-skill-modal',
  templateUrl: './edit-skill-modal.component.html',
  styleUrls: ['./edit-skill-modal.component.css']
})
export class EditSkillModalComponent implements OnInit {

  skills: Skills | undefined;
  editForm: FormGroup;
  isLoading = false;
  onCancel = false; 

  constructor(public modal: NgbActiveModal, private skillsService: SkillsService, private formBuilder: FormBuilder, private router: Router) {
    this.editForm = this.formBuilder.group({
      idSkill: [this.skills?.idSkill],
      nombreSkill: [this.skills?.nombreSkill, Validators.required],
      porcentaje: [this.skills?.porcentaje, Validators.required],
    });
   }
 
  ngOnInit() {
  }
 
  onSubmit() {
    if ( this.onCancel || this.isLoading) {
      return;
    }
    this.isLoading = true;
    let sk = this.editForm.value; 
    sk.idSkill = this.skills?.idSkill; 
    console.log(sk); 

    this.skillsService.updateSkills(sk).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
 
  get nombreSkill() {
    return this.editForm.get('nombreSkill'); 
  }

  get porcentaje() {
    return this.editForm.get('porcentaje');
  }

}
