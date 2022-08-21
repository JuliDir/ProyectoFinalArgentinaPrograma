import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { AddExperienciaModalComponent } from 'src/app/modals/experiencia/add-experiencia-modal/add-experiencia-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditExperienciaModalComponent } from 'src/app/modals/experiencia/edit-experiencia-modal/edit-experiencia-modal.component';
import { DeleteExperienciaModalComponent } from 'src/app/modals/experiencia/delete-experiencia-modal/delete-experiencia-modal.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  public experiencias: Experiencia[]=[];  

  constructor(private experienciaService: ExperienciaService, private autenticacionService: AutenticacionService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getExperiencias(); 
  }

  public getExperiencias():void{
    this.experienciaService.getExperiencia().subscribe({
      next:(Response: Experiencia[]) => {
        this.experiencias = Response; 
      },
      error: (error: HttpErrorResponse) =>{
        alert(error.message)
      }
    })
  }

  isLogout():boolean{
    return this.autenticacionService.isLogout(); 
  }
   
  addExperiencia(){
    const ref = this.modalService.open(AddExperienciaModalComponent, {centered: true, size: 'lg'});
    
    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        this.getExperiencias(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        ref.componentInstance.onCancel = true; 
      }
    });
  }

  editExperiencia(experiencia: Experiencia){
    const ref = this.modalService.open(EditExperienciaModalComponent, {centered: true, size: 'lg'});
    ref.componentInstance.experiencia = experiencia;

    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        this.getExperiencias(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        ref.componentInstance.onCancel = true; 
      }
  });
  }

  deleteExperiencia(experiencia:Experiencia){
    const ref = this.modalService.open(DeleteExperienciaModalComponent, {centered: true})
    ref.componentInstance.idExp = experiencia.idExp; 
    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        this.getExperiencias(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        ref.componentInstance.onCancel = true; 
      }
  });
 }

}
