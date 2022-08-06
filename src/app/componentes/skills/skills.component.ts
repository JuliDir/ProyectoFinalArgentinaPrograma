import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';

declare function skillbarAnimation():any; 

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: Skills[] = [];

  constructor(private skillsService:SkillsService) { }

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

}
