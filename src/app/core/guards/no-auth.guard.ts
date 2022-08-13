import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { AutenticacionService } from 'src/app/servicios/autenticacion.service';


@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {
  
  constructor(private ruta: Router, private autenticacionService: AutenticacionService){
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      let currentUser = this.autenticacionService.UsuarioAutenticado; 
      if(currentUser && currentUser.accessToken){
        this.ruta.navigate(['/home'])
         return false; 
      }
      return true; 
  }
  
}
