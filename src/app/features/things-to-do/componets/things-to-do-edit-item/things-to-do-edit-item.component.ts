import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from 'src/app/core/services/to-do.service';
import { ThingToDo } from 'src/app/shared/model/things-to-do-model';

@Component({
  selector: 'todo-things-to-do-edit-item',
  templateUrl: './things-to-do-edit-item.component.html',
  styleUrls: ['./things-to-do-edit-item.component.css']
})
export class ThingsToDoEditItemComponent implements OnInit {

  toDoDetail: ThingToDo
  loading: string = "loading"
  taskEdit: boolean = false

  constructor(private route: ActivatedRoute, private toDoService: ToDoService) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (p) => this.requestDetailCompany(p['toDoId']),
      error: (e) => this.loadingError(e)
    })
  }

  public requestDetailCompany(toDoId: number) {
    this.toDoService.getOneToDoById(toDoId).subscribe({
      next: (v) => (this.toDoDetail = v, console.log(this.toDoDetail)),
      error: (e) => this.loadingError(e),
      complete: () => this.loading = this.toDoDetail != undefined ? "loaded" : "empity",
    })
  }

  public loadingError(e: Error): void {
    this.loading = "error"
    console.log(e);
  }

  public editTodoByForm(toDoForm: NgForm): void {

    const obj: ThingToDo = {
      id: this.toDoDetail.id,
      text: toDoForm.value.text,
      creationDate: this.toDoDetail.creationDate,
      dueDate: toDoForm.value.dueDate,
      state: toDoForm.value.state
    }

    this.toDoService.editToDo(obj).subscribe({
      next: (v) => console.log(v),
      error: (e) => this.loadingError(e),
      complete: () => this.taskEdit = true
    })

  }

}
