import { Injectable } from '@angular/core';
import { Get_conection } from '../firebase/fireConfig'
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore/lite';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  // getTasks(){
  //   console.log('Ready to use');
  //   console.log(Get_conection());
  // }

  async getTasks() {
    const taskCol = collection(Get_conection(), 'todos');
    const taskSnapshot = await getDocs(taskCol);
    const taskList = taskSnapshot.docs.map(doc => doc.data());
    // console.log(taskList);
    return taskList;
  }

  async setTask(task:any) {
    
    const docRef = await addDoc(collection(Get_conection(), 'todos'), {
      autor: task.autor,
      name: task.name,
      img: task.img,
      creation_dt: new Date,
      completed: false,
      start_dt: null,
      end_dt: null
    });

    return docRef.id
  }

}
