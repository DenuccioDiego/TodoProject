import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThingToDo } from 'src/app/shared/model/things-to-do-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ToDoService {

  constructor(private Http: HttpClient) { }

  public getAllToDo(): Observable<ThingToDo[]> {
    const url = environment.baseUrl + '/toDo';
    return this.Http.get<ThingToDo[]>(url);
  }

  public getOneCompanyById(toDoId: Number): Observable<ThingToDo> {
    const url = environment.baseUrl + '/toDo/' + toDoId;
    return this.Http.get<ThingToDo>(url);
  }
}
