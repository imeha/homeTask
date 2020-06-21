import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskProviderService {

  url = "http://localhost:8080";
  constructor(private http: HttpClient, private loginService: LoginService) { }


  public getAllTasks(): Observable<any> {
    return this.http.get(this.url+'/task', {headers: this.getHeaders()});   
  }

  public getTaskById(id: number): Observable<any> {
    return this.http.get(this.url+'/task/'+id, {headers: this.getHeaders()})
  }

  public createNewTask(data): Observable<Object> {
    return this.http.post(this.url+'/task', data, {headers: this.getHeaders()});
  }


  public updateTask(id: number, value: any): Observable<Object> {
    return this.http.put(this.url+'/task/'+id, value, {headers: this.getHeaders()});
  }


  public deleteTask(id: number): Observable<any> {
    return this.http.delete(this.url+'/task/'+id, {headers: this.getHeaders(), responseType: 'text' });
  }

  private getHeaders() {
    return new HttpHeaders({'Content-Type':'application/json','Authorization':'Bearer ' + this.loginService.jwt});

  }

}
