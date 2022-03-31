import { Injectable } from '@angular/core';
import { Protocol } from './protocol';
import { Observable, of  } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProtocolResponse } from './protocol-response';


@Injectable({
  providedIn: 'root'
})
export class ProtocolService {

  constructor(private http: HttpClient) { }

  httpheaders = new HttpHeaders();

  localUrl: string = 'https://localhost:7009/protocols';

  getProtocols(): Observable<ProtocolResponse> {
    this.httpheaders.set('Access-Control-Allow-Origin', '*');
    this.httpheaders.set('Access-Control-Allow-Headers', '*');
    this.httpheaders.set('Access-Control-Allow-Method', '*');
    this.httpheaders.set('content-type', 'application/json');
    return this.http.get<ProtocolResponse>(this.localUrl, {headers: this.httpheaders});
  }
}
