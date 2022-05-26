import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoService } from 'src/app/core/services/to-do.service';
import { ThingToDo } from 'src/app/shared/model/things-to-do-model';

@Component({
  selector: 'todo-things-to-do-container',
  templateUrl: './things-to-do-container.component.html',
  styleUrls: ['./things-to-do-container.component.css']
})
export class ThingsToDoContainerComponent implements OnInit {

  loading: string = 'loading';
  toDoList: ThingToDo[] = [];


  constructor(private router: Router, private toDoService: ToDoService) {
    this.toDoService.getAllToDo().subscribe({
      next: (v) => this.toDoList = v,
      error: (e) => this.loading = "error",
      complete: () => this.loading = this.toDoList.length > 0 ? "loaded" : "empity"
    })
  }

  ngOnInit(): void { }

  public selectionHandler(toDoItem: ThingToDo): void {
    const url = `todo/show/${toDoItem.id}`
    console.log(url);

    this.router.navigateByUrl(url)
  }

}
