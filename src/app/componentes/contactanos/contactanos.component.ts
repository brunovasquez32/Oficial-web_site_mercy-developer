import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SolicitudFormularioService } from '../../servicios/solicitud-formulario/solicitud-formulario.service';
import { response } from 'express';
import {TecnicosDeLaEmpresaService} from '../../servicios/tecnicos-de-la-empresa/tecnicos-de-la-empresa.service';

import { error } from 'console';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  formularioForm;
  datos_formulario: any;
  obtener_profesionales:any;
  constructor(private formBuild: FormBuilder, private solicitudFormularioSrv:SolicitudFormularioService, private TecnicosDeLaEmpresaSrv: TecnicosDeLaEmpresaService){
    this.formularioForm = this.formBuild.group({
      nombre: '',
      apellido: '',
      correo: '',
      telefono: '',
      mensaje: ''
    });
  }
  
  ngOnInit(){
  }
  
  obtenerProfesionales(){
    this.TecnicosDeLaEmpresaSrv.obtenerProfesionales().subscribe (
      (response:any) => {
        this.obtener_profesionales = response.profesionales;
        console.log(this.obtener_profesionales);
      }, error => {
        console.log(error)
      }
    )
  }

  enviarDatos(){
    this.solicitudFormularioSrv.registrarFormulario(this.formularioForm.value).subscribe(
      (response:any) => {
        
        this.datos_formulario = response.solicitud_formulario
        console.log(this.datos_formulario);        
        alert("Datos guardados correctamente");
        this.formularioForm.reset();
      },error => {
        console.log(error);
      }
    )   
  }

}
