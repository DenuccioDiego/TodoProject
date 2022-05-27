import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThingToDo } from 'src/app/shared/model/things-to-do-model';

@Component({
  selector: 'todo-things-to-do-list-item',
  templateUrl: './things-to-do-list-item.component.html',
  styleUrls: ['./things-to-do-list-item.component.css']
})
export class ThingsToDoListItemComponent implements OnInit {

  @Input() toDoItem: ThingToDo

  constructor() { }

  @Output() selectionShowToDo: EventEmitter<ThingToDo> = new EventEmitter<ThingToDo>();
  @Output() selectionEditToDo: EventEmitter<ThingToDo> = new EventEmitter<ThingToDo>();
  @Output() selectionDeleteToDo: EventEmitter<ThingToDo> = new EventEmitter<ThingToDo>();

  ngOnInit(): void {
  }

  public showHandler(): void {
    this.selectionShowToDo.emit(this.toDoItem)
  }

  public editHandler(): void {
    this.selectionEditToDo.emit(this.toDoItem)
  }

  public deleteHandler(): void {
    this.selectionDeleteToDo.emit(this.toDoItem)
  }

}
