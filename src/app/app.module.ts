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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEducacionModalComponent } from './modals/educacion/add-educacion-modal/add-educacion-modal.component';
import { EditEducacionModalComponent } from './modals/educacion/edit-educacion-modal/edit-educacion-modal.component';
import { DeleteEducacionModalComponent } from './modals/educacion/delete-educacion-modal/delete-educacion-modal.component';
import { AddSkillModalComponent } from './modals/skills/add-skill-modal/add-skill-modal.component';
import { EditSkillModalComponent } from './modals/skills/edit-skill-modal/edit-skill-modal.component';
import { DeleteSkillModalComponent } from './modals/skills/delete-skill-modal/delete-skill-modal.component';
import { UsuarioEditModalComponent } from './modals/usuario/usuario-edit-modal/usuario-edit-modal.component';
import { AddExperienciaModalComponent } from './modals/experiencia/add-experiencia-modal/add-experiencia-modal.component';
import { EditExperienciaModalComponent } from './modals/experiencia/edit-experiencia-modal/edit-experiencia-modal.component';
import { DeleteExperienciaModalComponent } from './modals/experiencia/delete-experiencia-modal/delete-experiencia-modal.component';


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
    AddEducacionModalComponent,
    EditEducacionModalComponent,
    DeleteEducacionModalComponent,
    AddSkillModalComponent,
    EditSkillModalComponent,
    DeleteSkillModalComponent,
    UsuarioEditModalComponent,
    AddExperienciaModalComponent,
    EditExperienciaModalComponent,
    DeleteExperienciaModalComponent,
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
        "clockwise": false}), NgbModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
