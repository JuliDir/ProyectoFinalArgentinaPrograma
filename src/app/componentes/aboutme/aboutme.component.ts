import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  

  constructor(private autenticacionService: AutenticacionService) { }

  ngOnInit(): void { 
  }

  isLogout(){
    return this.autenticacionService.isLogout(); 
  }

}
