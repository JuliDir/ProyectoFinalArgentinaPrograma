import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-add-skill-modal',
  templateUrl: './add-skill-modal.component.html',
  styleUrls: ['./add-skill-modal.component.css']
})
export class AddSkillModalComponent implements OnInit {

  skills: Skills | undefined;
  editForm: FormGroup;
  isLoading = false;
  onCancel = false; 

  constructor(public modal: NgbActiveModal, private skillsService: SkillsService, private formBuilder: FormBuilder, private router: Router) {
    this.editForm = this.formBuilder.group({
      idSkills: [this.skills?.idSkill],
      nombreSkill: [this.skills?.nombreSkill, Validators.required],
      porcentaje: [this.skills?.porcentaje, Validators.required],
    });
   }
 
  ngOnInit() {
  }
 
  onSubmit() {
    if (this.editForm.invalid || this.isLoading || this.onCancel) {
      return;
    }
    this.isLoading = true;

    let sk: Skills = this.editForm.value; 
    sk.idSkill = Math.floor(Math.random());  

    this.skillsService.addSkills(sk).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        alert(error.message)
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
