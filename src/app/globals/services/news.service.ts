import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }


  getNews(source='',query=''): Promise<any>{
    return this.http.get('http://localhost:3001/api/noticias/'+source+'?search='+query).toPromise();
  }

  getHeadlines(country= ''): Promise<any>{
    return this.http.get('http://localhost:3001/api/topheadlines/'+country).toPromise();
  }

  getSources(): Promise<any>{
    return this.http.get('http://localhost:3001/api/sources/').toPromise();  
  }

}
