import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddSkillModalComponent } from 'src/app/modals/skills/add-skill-modal/add-skill-modal.component';
import { DeleteSkillModalComponent } from 'src/app/modals/skills/delete-skill-modal/delete-skill-modal.component';
import { EditSkillModalComponent } from 'src/app/modals/skills/edit-skill-modal/edit-skill-modal.component';
import { Skills } from 'src/app/models/skills';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { SkillsService } from 'src/app/servicios/skills.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: Skills[] = [];

  constructor(private skillsService:SkillsService, private autenticacionService: AutenticacionService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getSkills(); 
  }

  public getSkills():void{
    this.skillsService.getSkills().subscribe({
      next: (response: Skills[]) => {
        this.skills = response; 
      },
      error: (error:HttpErrorResponse) =>{
        alert(error.message)
      }
    })
  }

  isLogout(): boolean{
    return this.autenticacionService.isLogout(); 
  }

  addSkill(){
    const ref = this.modalService.open(AddSkillModalComponent, {centered: true, size: 'md'});
    
    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        this.getSkills(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        ref.componentInstance.onCancel = true; 
      }
    });
  }

  editSkill(skill: Skills){
    const ref = this.modalService.open(EditSkillModalComponent, {centered: true, size: 'md'}); 
    ref.componentInstance.skills = skill; 

    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        this.getSkills(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        console.log(skill); 
        ref.componentInstance.onCancel = true; 
      }
  });
  }

  deleteSkill(skill:Skills){
    const ref = this.modalService.open(DeleteSkillModalComponent, {centered: true, size:'md'})
    ref.componentInstance.idSkill = skill.idSkill; 

    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        this.getSkills(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        ref.componentInstance.onCancel = true; 
      }
  });
 }
}
