import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewThingToDo } from 'src/app/shared/model/new-things-to-do-model';
import { ThingToDo } from 'src/app/shared/model/things-to-do-model';
import { environment } from 'src/environments/environment';

@Injectable()
export class ToDoService {

  constructor(private http: HttpClient) { }

  public saveToDo(toDo: NewThingToDo): Observable<ThingToDo> {
    const url = environment.baseUrl + '/toDo';
    return this.http.post<ThingToDo>(url, toDo);
  }

  public getAllToDo(): Observable<ThingToDo[]> {
    const url = environment.baseUrl + '/toDo';
    return this.http.get<ThingToDo[]>(url);
  }

  public getOneToDoById(toDoId: Number): Observable<ThingToDo> {
    const url = environment.baseUrl + '/toDo/' + toDoId;
    return this.http.get<ThingToDo>(url);
  }

  public editToDo(toDo: ThingToDo): Observable<ThingToDo> {

    const url = environment.baseUrl + '/toDo/' + toDo.id;
    return this.http.put<ThingToDo>(url, toDo);
  }

  public deleteOneToDoById(toDoId: Number): Observable<ThingToDo> {
    const url = environment.baseUrl + '/toDo/' + toDoId;
    return this.http.delete<ThingToDo>(url);
  }
}
