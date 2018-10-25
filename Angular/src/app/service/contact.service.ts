import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Multiplexes } from '../model/multiplexes';
import { Manager } from '../model/manager';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseUrl: string;
  baseurl1:string;
  constructor(private http: Http) {
    this.baseUrl = "http://localhost:5454/Multiplexes";
    this.baseurl1= "http://localhost:5454/Managers";
  }

  getBaseUrlById(id: string): string {
    return this.baseUrl + "/" + id;
  }

  getBaseUrl1ById(id: number): string {
    return this.baseurl1 + "/" + id;
  }

  getSearchUrl(field: string, value: string): string {

    return this.baseUrl + "/" + field + "/" + value;
  }
  getSearchUrl1(field: string, value: string): string {
    
    return this.baseurl1 + "/" + field + "/" + value;
  }

  getJsonContentTypeHeader(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  getAllMultiplexes(): Observable<Multiplexes[]> {
    return this.http.get(this.baseUrl).pipe(
      map(data => data.json())
    );
  }

  getAllManagers(): Observable<Manager[]> {
    return this.http.get(this.baseurl1).pipe(
      map(data => data.json())
    );
  }

  searchMultiplex(field: string, value:string): Observable<Multiplexes[]> {
    return this.http.get(this.getSearchUrl(field,value)).pipe(
      map(data => data.json())
    );
  }

  searchManager(field: string, value:string): Observable<Manager[]> {
    return this.http.get(this.getSearchUrl1(field,value)).pipe(
      map(data => data.json())
    );
  }


  getMultiplexById(id: string): Observable<Multiplexes> {
    return this.http.get(this.getBaseUrlById(id)).pipe(
      map(data => data.json())
    );
  }

  getManagerById(id: number): Observable<Manager> {
    return this.http.get(this.getBaseUrl1ById(id)).pipe(
      map(data => data.json())
    );
  }

  getJsonContentTypeHeader1(): RequestOptions {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return new RequestOptions({ headers: headers });
  }

  addManager(manager: Manager): Observable<Manager> {
    return this.http.post(this.baseurl1, JSON.stringify(manager), this.getJsonContentTypeHeader1()).pipe(
      map(data => data.json())
    );
  }

  addMultiplex(multiplexes: Multiplexes): Observable<Multiplexes> {
    return this.http.post(this.baseUrl, JSON.stringify(multiplexes), this.getJsonContentTypeHeader()).pipe(
      map(data => data.json())
    );
  }


  deleteManagerById(id: number): Observable<Response> {
    return this.http.delete(this.getBaseUrl1ById(id));
  }

}
