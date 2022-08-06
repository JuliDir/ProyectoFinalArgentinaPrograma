import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { SkillsComponent } from './componentes/skills/skills.component'; 
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    AboutmeComponent,
    SkillsComponent,
    ExperienciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({
        "backgroundStrokeWidth": 0,
        "backgroundPadding": 7,
        "radius": 60,
        "space": -1,
        "unitsColor": "#222020",
        "outerStrokeGradient": true,
        "outerStrokeWidth": 7,
        "outerStrokeColor": "#d93f3f",
        "outerStrokeGradientStopColor": "#cd7a7a",
        "innerStrokeColor": "#e7e8ea",
        "innerStrokeWidth": 0,
        "title": [
                  ""
        ],
        "titleFontSize": "15",
        "titleFontWeight": "500",
        "subtitleColor": "#535050",
        "subtitleFontSize": "20",
        "animateTitle": false,
        "animationDuration": 1100,
        "showUnits": false,
        "clockwise": false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
