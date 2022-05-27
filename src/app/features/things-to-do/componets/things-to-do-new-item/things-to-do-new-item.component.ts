import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDoService } from 'src/app/core/services/to-do.service';
import { NewThingToDo } from 'src/app/shared/model/new-things-to-do-model';

@Component({
  selector: 'todo-things-to-do-new-item',
  templateUrl: './things-to-do-new-item.component.html',
  styleUrls: ['./things-to-do-new-item.component.css']
})
export class ThingsToDoNewItemComponent implements OnInit {

  toDoFormDetail: NewThingToDo

  constructor(private toDoService: ToDoService) { }

  ngOnInit(): void {
  }

  public saveTodoByForm(toDoForm: NgForm): void {

    const obj: NewThingToDo = {
      text: toDoForm.value.text,
      dueDate: toDoForm.value.dueDate,
      state: toDoForm.value.state
    }

    this.toDoService.saveToDo(obj).subscribe({
      next: (v) => console.log(v),
      error: (e) => console.log(e),
      complete: () => console.log("ok")
    })

  }
}
