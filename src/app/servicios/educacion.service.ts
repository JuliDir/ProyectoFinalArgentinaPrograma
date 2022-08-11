import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Educacion } from '../models/educacion';

@Injectable({
  providedIn: 'root'
})
export class EducacionService {
  private apiServerUrl = environment.apiBaseUrl; 

  constructor(private http:HttpClient) { }

  public getEducacion():Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.apiServerUrl}/api/educacion/all`); 
  }

  public getEducacionPorId(educacionId: number):Observable<Educacion>{
    return this.http.get<Educacion>(`${this.apiServerUrl}/api/educacion/id/${educacionId}`)
  }

  public addEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.post<Educacion>(`${this.apiServerUrl}/api/educacion/add`,educacion); 
  }

  public updateEducacion(educacion: Educacion):Observable<Educacion>{
    return this.http.put<Educacion>(`${this.apiServerUrl}/api/educacion/update`,educacion); 
  }

  public removeEducacion(educacionId: Number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/api/educacion/delete/${educacionId}`); 
  }
  
}
