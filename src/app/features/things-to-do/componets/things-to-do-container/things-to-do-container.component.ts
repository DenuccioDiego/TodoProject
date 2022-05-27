import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  word: string = "";


  constructor(private router: Router, private toDoService: ToDoService) {
    this.toDoService.getAllToDo().subscribe({
      next: (v) => this.toDoList = v,
      error: (e) => this.loadingError(e),
      complete: () => this.checkList()
    })
  }

  ngOnInit(): void { }

  showToDoHandler = (toDoId: ThingToDo) => this.router.navigateByUrl(`todo/show/${toDoId.id}`);
  editToDoHandler = (toDoId: ThingToDo) => this.router.navigateByUrl(`todo/edit/${toDoId.id}`);

  public searchByWord(searchByWordForm: NgForm): void {

    this.word = searchByWordForm.value.word

    if (this.word.length > 0) {
      this.toDoService.getListToDoByWord(this.word).subscribe({
        next: (v) => this.toDoList = v,
        error: (e) => this.loadingError(e),
        complete: () => this.checkList()
      })
    } else {
      this.toDoService.getAllToDo().subscribe({
        next: (v) => this.toDoList = v,
        error: (e) => this.loadingError(e),
        complete: () => this.checkList()
      })
    }
  }

  public deleteToDoHandler(toDoId: ThingToDo): void {
    this.toDoService.deleteOneToDoById(toDoId.id).subscribe({
      complete: () => this.removeItem(toDoId.id),
      error: (e) => this.loadingError(e)
    })
  }

  public removeItem(toDoId: number): void {
    this.toDoList = this.toDoList.filter(el => el.id !== toDoId)
    this.checkList()
  }

  public checkList(): void {
    this.loading = this.toDoList.length > 0 ? "loaded" : "empity"
  }

  public loadingError(e: Error): void {
    this.loading = "error"
    console.log(e);
  }

}
