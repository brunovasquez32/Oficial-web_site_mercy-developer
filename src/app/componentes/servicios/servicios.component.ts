import { Component, OnInit } from '@angular/core';
import { ServiciosDeLaEmpresaService } from '../../servicios/servicios-de-la-empresa/servicios-de-la-empresa.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  servicios: any[] = []; 
  serviciosVisibles: any[] = [];

  constructor(private serviciosService: ServiciosDeLaEmpresaService) { }

  ngOnInit(): void {
    this.obtenerServicios();
  }

  
  obtenerServicios(): void {
    this.serviciosService.obtenerServicios().subscribe(
      (response: any) => {
        this.servicios = response.servicios;
        this.serviciosVisibles = this.servicios.slice(0, 3);
      },
      (error) => {
        console.log("Error al obtener servicios", error);
      }
    );
  }

  
  mostrarTodosServicios(): void {
    this.serviciosVisibles = this.servicios; 
  }
}
