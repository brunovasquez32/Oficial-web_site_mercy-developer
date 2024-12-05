import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TecnicosDeLaEmpresaService {
  backend = environment.backend+"/profesional";

  constructor(private http: HttpClient) { }

  obtenerProfesionales(){
    return this.http.get(`${this.backend}/obtener-profesionales}`);
  }
}
