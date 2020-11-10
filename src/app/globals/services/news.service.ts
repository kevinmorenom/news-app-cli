import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';

 @Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }


  getNews(source='',query=''): Promise<any>{
    return this.http.get(environment.apiURl+'noticias/'+source+'?search='+query).toPromise();
  }

  getHeadlines(country= ''): Promise<any>{
    return this.http.get(environment.apiURl+'topheadlines/'+country).toPromise();
  }

  getSources(): Promise<any>{
    return this.http.get(environment.apiURl+'sources/').toPromise();  
  }

}
