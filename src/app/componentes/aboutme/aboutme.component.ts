import { Component, OnInit } from '@angular/core';
import { Global } from 'src/app/common/global';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public isLogin:boolean | undefined; 

  constructor() { }

  ngOnInit(): void {
    this.isLogin = Global.isLogin; 
  }


}
