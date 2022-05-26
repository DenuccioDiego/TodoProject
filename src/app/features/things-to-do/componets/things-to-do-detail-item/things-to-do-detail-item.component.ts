import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToDoService } from 'src/app/core/services/to-do.service';
import { ThingToDo } from 'src/app/shared/model/things-to-do-model';

@Component({
  selector: 'todo-things-to-do-detail-item',
  templateUrl: './things-to-do-detail-item.component.html',
  styleUrls: ['./things-to-do-detail-item.component.css']
})
export class ThingsToDoDetailItemComponent implements OnInit {

  toDoDetail: ThingToDo
  loading: string = "loading"

  constructor(private route: ActivatedRoute, private toDoService: ToDoService) {

  }

  ngOnInit(): void {

    this.route.params.subscribe({
      next: (p) => this.requestDetailCompany(p['toDoId']),
      error: (e) => this.loading = "error"
    })
  }

  public requestDetailCompany(toDoId: number) {
    this.toDoService.getOneToDoById(toDoId).subscribe({
      next: (v) => this.toDoDetail = v,
      error: (e) => this.loading = "error",
      complete: () => this.loading = this.toDoDetail != undefined ? "loaded" : "empity"
    })
  }
}
