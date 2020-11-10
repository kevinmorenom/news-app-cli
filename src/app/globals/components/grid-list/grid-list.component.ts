import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.scss']
})
export class GridListComponent implements OnInit {

  @Input() items:any[]=[];

  @Output() onChildClick:EventEmitter<any> =new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(item){
    this.onChildClick.emit(item);
    console.log("Click on: ",item);
  }

}
