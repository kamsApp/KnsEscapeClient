import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

let headers;
const urlServeur: string = "http://109.10.241.247/";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private http:HttpClient) {
    headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    headers.append('Access-Control-Allow-Origin', '*');
  }


  public doGet(path: string) : Observable<any>{
    return this.http
      .get(urlServeur.concat(path), headers)
  }

  public doPost(path: string, body: any) : Observable<any> {
    return this.http
      .post(urlServeur.concat(path), body, headers)
  }

  public handleError (error: any) {
    let errMsg = error.message || 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
