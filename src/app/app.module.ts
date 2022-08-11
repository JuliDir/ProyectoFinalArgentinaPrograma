import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutmeComponent } from './componentes/aboutme/aboutme.component';
import { SkillsComponent } from './componentes/skills/skills.component'; 
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { InterceptorService } from './servicios/interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EducacionComponent,
    AboutmeComponent,
    SkillsComponent,
    ExperienciaComponent,
    FooterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule, 
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
        "titleFontSize": "15",
        "titleFontWeight": "500",
        "subtitleColor": "#535050",
        "subtitleFontSize": "20",
        "animateTitle": false,
        "animationDuration": 1100,
        "showUnits": false,
        "clockwise": false})
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
