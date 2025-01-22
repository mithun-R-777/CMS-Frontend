import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private baseUrl = 'http://localhost:8080/tags';

  constructor(private http: HttpClient) { }

  addTag(tag: { name: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}`, tag);
  }
}