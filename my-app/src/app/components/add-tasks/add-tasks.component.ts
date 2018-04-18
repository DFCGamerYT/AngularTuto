import { Component, OnInit } from '@angular/core';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css']
})
export class AddTasksComponent implements OnInit {
  
  task: Task = {
    title: '',
    description: ''
  };
  
  constructor(public taskService: TaskService) { }

  ngOnInit() {
  }
  
  //Metodo Escritura
  onSubmit(){
    //console.log('prueba');
    
    if(this.task.title != '' && this.task.description != ''){
      this.taskService.addTask(this.task);
      this.initialize();
    }
    if(this.task.description == ''){
      const response = confirm('are you sure want add task without description?')
      if(response)
      this.taskService.addTask(this.task);
      this.initialize
    }
  }

  initialize(){
    this.task.title = '';
    this.task.description = '';
  }

}
