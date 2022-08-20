import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-delete-educacion-modal',
  templateUrl: './delete-educacion-modal.component.html',
  styleUrls: ['./delete-educacion-modal.component.css']
})
export class DeleteEducacionModalComponent implements OnInit {
  idEdu: Number = 0;  
  isLoading = false;
  onCancel = false; 
  constructor(public modal: NgbActiveModal, private educacionService: EducacionService) { }

  ngOnInit(): void {
  }

  delete(){
    if ( this.onCancel || this.isLoading) {
      return;
    }
    this.isLoading = true; 
     
    this.educacionService.removeEducacion(this.idEdu).subscribe(x => {
      this.isLoading = false;
      this.modal.close('Yes');
    },
      error => {
        this.isLoading = false;
      });
  }
}


