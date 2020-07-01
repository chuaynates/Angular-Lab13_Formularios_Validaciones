import { Component,OnInit } from '@angular/core';
import {FormGroup,FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb:FormBuilder){
    this.createForm();
  }
  createForm(){
    this.angForm = this.fb.group({
      nombre:['',],
      apellido:[''],
      segape:[''],
      fecha:[''],
      email:[''],
      contra1:[''],
      contra2:['']
      
    });
  }
  validMail(mail)
{
  if (mail === "") {
    alert('El campo correo no puede estar vacío');
  }

  return /^(([^<>()[].,;:\s@"]+(.[^<>()[].,;:\s@"]+)*)|(".+"))@(([^<>().,;\s@"]+.{0,1})+([^<>().,;:\s@"]{2,}|[\d.]+))$/.test(mail);
}
  onClickSubmit(email,apellido,nombre,segape,fecha,contra1,contra2){
  if(!this.validMail(email)){
    alert('Correo invalido');   
  }
  
  else if(apellido.value === ""){
    alert('El campo apellido paterno no puede estar vacío');
  }
  else if(nombre.value === ""){
    alert('El campo nombre no puede estar vacío');
  }
  else if(segape.value === ""){
    alert('El campo apellido materno no puede estar vacío');
  }
  else if(fecha.value === ""){
    alert('El campo fecha no puede estar vacío');
  }
  else if(contra1.value === ""){
    alert('El campo fecha no puede estar vacío');
  }
  else if(contra1.value.length < 6){
    alert('Las contraseña debe tener un mínimo de 6 caracteres');
  }
  else if(contra2.value === ""){
    alert('El campo fecha no puede estar vacío');
  }
  else if(contra2.value != contra1.value){
    alert('Las contraseñas no coinciden');
  }

  else(
    alert('DATOS ACEPTADOS')
  )}
  ngOnInit(){    
  }
  
}
