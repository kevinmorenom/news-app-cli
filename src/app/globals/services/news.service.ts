import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news=[
    {
      url:'#',
      title:'Noticia 1',
      image:'https://dummyimage.com/300.png/09f/fff'
    },
    {
      url:'#',
      title:'Noticia 2',
      image:'https://dummyimage.com/300.png/09f/fff'
    },
    {
      url:'#',
      title:'Noticia 3'
    },
    {
      url:'#',
      title:'Noticia 4'
    }
  ];
  constructor(private http:HttpClient) { }

  getNewsCallback (callback) {
    setTimeout(()=>{
      callback(this.news);
    },5000);
  }

  getNews(): Promise<any>{
  return this.http.get('http://localhost:3001/api/noticias?search=gaga').toPromise();
    // return this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
  // return this.http.get('http://localhost:3001/api/sources').toPromise();

  // getNews(): Promise<any>{
  //   return new Promise((resolve,reject)=>{
  //     setTimeout(()=>{
  //       resolve(this.news);
  //     },2000);
  //   });
  // }

}
