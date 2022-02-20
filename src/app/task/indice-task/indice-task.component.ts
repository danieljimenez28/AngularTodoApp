import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Task } from 'src/app/interfaces/ITask';
import { TaskService } from 'src/app/services/task.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-indice-task',
  templateUrl: './indice-task.component.html',
  styleUrls: ['./indice-task.component.css']
})
export class IndiceTaskComponent implements OnInit {
  
  constructor(
    private task:TaskService,
    private formBuilder: FormBuilder
  ) { }

  
  displayedColumns: string[] = ['name', 'autor', 'img'];
  dataSource = null;
  dataSourceOriginal = null;
  form: FormGroup;
  taskCount = 0;
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      name:''
    });

    this.form.valueChanges
        .subscribe(valor => {
          this.dataSource = this.dataSourceOriginal;
          this.dataSource = this.dataSource.filter(data => data.name.toLowerCase().indexOf(valor.name.toLowerCase()) !== -1);
          this.taskCount = this.dataSource.length;
        });

    this.task.getTasks()
        .then((task)=>{
          let tasksArray:Task[] = [];
          task.map(dat =>{
            tasksArray.push(
              {
                autor:dat.autor,
                name:dat.name,
                img:dat.img,
                creation_dt: dat.creation_dt
              }
            );
            
          });
          this.dataSource = tasksArray;
          this.dataSourceOriginal = tasksArray;
          this.taskCount = tasksArray.length;

        })
        .catch((err) => console.log(err));
  }
  buscarTarea(){

  }
}
