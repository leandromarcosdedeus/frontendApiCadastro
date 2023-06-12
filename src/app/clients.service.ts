import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ClientModel } from './clients/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http:HttpClient) { }

  listarClients() : Observable<any>{
    return this.http.get('http://localhost:8000/api/clients')
  };
  addClient(client: ClientModel): Observable<any>{
    return this.http.post('http://localhost:8000/api/addClient', client);
  }
  getMostFrequent() : Observable<any>{
    return this.http.get('http://localhost:8000/api/mostFrequent');
  }
}
