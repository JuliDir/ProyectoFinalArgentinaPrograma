import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/models/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { Global } from 'src/app/common/global'

declare function skillbarAnimation():any; 

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  public skills: Skills[] = [];
  public isLogin: boolean | undefined; 

  constructor(private skillsService:SkillsService) { }

  ngOnInit(): void {
    this.getSkills(); 
    this.isLogin = Global.isLogin; 
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
