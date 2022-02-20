import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../interfaces/ITask'

@Component({
  selector: 'app-crear-task',
  templateUrl: './crear-task.component.html',
  styleUrls: ['./crear-task.component.css']
})
export class CrearTaskComponent implements OnInit {

  constructor(
    private formBuilder:FormBuilder,
    private taskServ:TaskService,
    private route:Router
  ) { }

  form:FormGroup;
  // submit:EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', {
        validators:[Validators.required, Validators.minLength(5)]
      }],
      autor: ['', Validators.required],
      img: ['', {
        validators:[Validators.required, Validators.minLength(20)]
      }]
    });
  }

  SaveTask(){
    // this.submit.emit()

    //console.log(`${this.form.value.name} ${this.form.value.img}`);

    // this.route.navigate(['/tasks']);
    
    let task = {
      autor: this.form.value.autor,
      name: this.form.value.name,
      img: this.form.value.img,
    }
    
    this.taskServ.setTask(task)
        .then(dat =>{
          this.route.navigate(['/tasks']);
          // return alert(`Tarea No. ${dat} Guardada.`);
        })

    // alert('Tarea Guardada');
  }

  getErrorCampoNombre(){

    let campo = this.form.get('name');

    // console.log(campo);

    if(campo.hasError('required'))
    {
      return 'El nombre de la tarea es requerida';
    }
    if(campo.hasError('minlength'))
    {
      return '5 caracteres como minimo';
    }

    return '';
  }

  getErrorCampoAutor(){

    let campo = this.form.get('autor');

    if(campo.hasError('required'))
    {
      return 'El Autor de la tarea es requerido';
    }
    
    return '';
  }

  getErrorCampoImg(){

    let campo = this.form.get('img');

    if(campo.hasError('required'))
    {
      return 'La url de la imagen de la tarea es requerida';
    } 
    if(campo.hasError('minlength'))
    {
      return '20 caracteres como minimo';
    }
    
    return '';
  }
}
