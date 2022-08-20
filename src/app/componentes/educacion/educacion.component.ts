import { HttpErrorResponse } from '@angular/common/http';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEducacionModalComponent } from 'src/app/modals/educacion/add-educacion-modal/add-educacion-modal.component';
import { EditEducacionModalComponent } from 'src/app/modals/educacion/edit-educacion-modal/edit-educacion-modal.component';
import { DeleteEducacionModalComponent } from 'src/app/modals/educacion/delete-educacion-modal/delete-educacion-modal.component';


@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  public educaciones: Educacion[]=[];  

  constructor(private educacionService: EducacionService, private autenticacionService: AutenticacionService,
    private modalService: NgbModal ) { }

  ngOnInit(): void {
    this.getEducaciones();  
  }

  public getEducaciones():void{
    this.educacionService.getEducacion().subscribe({
      next:(Response: Educacion[]) =>{
        this.educaciones = Response; 
      },
      error:(error:HttpErrorResponse) => {
        alert(error.message); 
      }
    })
  }

  isLogout() :boolean{
    return this.autenticacionService.isLogout(); 
  }

  addEducacion(){
    const ref = this.modalService.open(AddEducacionModalComponent, {centered: true, size: 'lg'});
    
    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        window.location.reload(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        ref.componentInstance.onCancel = true; 
      }
    });
  }

  editEducacion(educacion: Educacion){
    const ref = this.modalService.open(EditEducacionModalComponent, {centered: true, size: 'lg'});
    ref.componentInstance.educacion = educacion;

    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        window.location.reload(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        ref.componentInstance.onCancel = true; 
      }
  });
  }

  deleteEducacion(educacion:Educacion){
    const ref = this.modalService.open(DeleteEducacionModalComponent, {centered: true})
    ref.componentInstance.idEdu = educacion.idEdu; 
    ref.result.then((x) =>{
      if(x === 'Yes'){
        console.log('Yes click');
        window.location.reload(); 
      } else if(x === 'Cancel'){
        console.log('Cancel Click')
        ref.componentInstance.onCancel = true; 
      }
  });
 }
}
