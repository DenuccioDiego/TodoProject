import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThingToDo } from 'src/app/shared/model/things-to-do-model';

@Component({
  selector: 'todo-things-to-do-list-item',
  templateUrl: './things-to-do-list-item.component.html',
  styleUrls: ['./things-to-do-list-item.component.css']
})
export class ThingsToDoListItemComponent implements OnInit {

  @Input() toDoItem: ThingToDo | undefined

  constructor() { }

  @Output() selectionToDo: EventEmitter<ThingToDo> = new EventEmitter<ThingToDo>();
  ngOnInit(): void {
  }

  public selectionHandler(): void {
    this.selectionToDo.emit(this.toDoItem)
  }

}
