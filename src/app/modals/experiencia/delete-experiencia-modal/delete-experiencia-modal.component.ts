import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-delete-experiencia-modal',
  templateUrl: './delete-experiencia-modal.component.html',
  styleUrls: ['./delete-experiencia-modal.component.css']
})
export class DeleteExperienciaModalComponent implements OnInit {

  idExp: number = 0;  
  isLoading = false;
  onCancel = false; 
  constructor(public modal: NgbActiveModal, private experienciaService: ExperienciaService) { }

  ngOnInit(): void {
  }

  delete(){
    if ( this.onCancel || this.isLoading) {
      return;
    }
    this.isLoading = true; 
     
    this.experienciaService.removeExperiencia(this.idExp).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }

}
