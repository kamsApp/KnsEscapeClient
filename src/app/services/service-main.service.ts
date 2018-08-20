import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

let headers;

@Injectable({
  providedIn: 'root'
})
export class ServiceMainService {

  constructor(private http:HttpClient) {
    headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
  }

  getModules(): Observable<any> {
    return this.http.get('http://192.168.0.17:3000/modules', headers);
  }
}
