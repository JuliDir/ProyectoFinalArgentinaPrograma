import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillsService } from 'src/app/servicios/skills.service';

@Component({
  selector: 'app-delete-skill-modal',
  templateUrl: './delete-skill-modal.component.html',
  styleUrls: ['./delete-skill-modal.component.css']
})
export class DeleteSkillModalComponent implements OnInit {
  idSkill: Number = 0;  
  isLoading = false;
  onCancel = false; 
  constructor(public modal: NgbActiveModal, private skillsService: SkillsService) { }

  ngOnInit(): void {
  }

  delete(){
    if (this.onCancel || this.isLoading) {
      return;
    }
    this.isLoading = true; 

    this.skillsService.removeSkill(this.idSkill).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
}
