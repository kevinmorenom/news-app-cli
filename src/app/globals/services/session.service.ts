import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private httpClient:HttpClient) { }

  signup(data:any):Promise<any>{
    const url = `${environment.apiURl}signup`
    return this.httpClient.post(url,data).toPromise();
  }

  login(credentials:any):Promise<any>{
    const url = `${environment.apiURl}auth`
    return this.httpClient.post(url,credentials).toPromise();
  }
}
