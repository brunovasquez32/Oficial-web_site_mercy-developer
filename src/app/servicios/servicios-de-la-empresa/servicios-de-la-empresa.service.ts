import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development'; 

@Injectable({
  providedIn: 'root'
})
export class ServiciosDeLaEmpresaService {
  private backend = `${environment.backend}/servicio-empresa`; 

  constructor(private http: HttpClient) {}

  obtenerServicios() {
    return this.http.get(`${this.backend}/obtener-servicios-empresa`,);
  }
}