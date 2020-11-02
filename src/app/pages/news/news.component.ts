import { Component, OnInit, OnChanges } from '@angular/core';
import { NewsService } from '../../globals/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges{
  title: string = 'News Component' ;

  news=[];

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.newsService.getNews().then(data =>
    {
      console.log("hola");
      this.news = data;
    }).catch(err=>{
      console.error(err);
    });
    // setTimeout(()=>{
    //   this.news.push({
    //     url:'#',
    //     title:'Nueva noticia'
    //   })
    // },10000);
  }

    ngOnChanges(){

    }
}
