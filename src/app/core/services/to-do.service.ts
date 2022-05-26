import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThingToDo } from 'src/app/shared/model/things-to-do-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ToDoService {

  constructor(private http: HttpClient) { }

  public getAllToDo(): Observable<ThingToDo[]> {
    const url = environment.baseUrl + '/toDo';
    return this.http.get<ThingToDo[]>(url);
  }

  public getOneToDoById(toDoId: Number): Observable<ThingToDo> {
    const url = environment.baseUrl + '/toDo/' + toDoId;
    return this.http.get<ThingToDo>(url);
  }

  public deleteOneToDoById(toDoId: Number): Observable<ThingToDo> {
    const url = environment.baseUrl + '/toDo/' + toDoId;
    return this.http.delete<ThingToDo>(url);
  }
}
