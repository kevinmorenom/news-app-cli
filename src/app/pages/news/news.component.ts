import { Component, OnInit, OnChanges } from '@angular/core';
import { NewsService } from '../../globals/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit, OnChanges{
  title: string = 'News Component' ;

  news = [];
  sources = [];
  source: string = '';
  query = '';

  constructor(private newsService: NewsService) {}

  ngOnInit(): void {
    this.getSources();
  }

  ngOnChanges(){

  }

  getSources(){
    this.newsService.getSources().then(data =>
      {
        this.sources = data;
      }).catch(err=>{
         console.error(err);
      });

  }

  doSearch(){
    this.newsService.getNews(this.source,this.query).then(data =>
      {
        this.news = data;
      }).catch(err=>{
        console.error(err);
      });
  }

}
