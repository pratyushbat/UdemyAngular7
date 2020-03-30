import { Component, OnInit ,Input,Output, EventEmitter, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
  styles: [
    `
  .fa-star {
    color: red;
    background:yellow;
}
  `
],
  inputs: ['isFavouritetwo'] ,
  encapsulation: ViewEncapsulation.Emulated //default 
  
})
export class FavouriteComponent {
  @Input() isFavourite:boolean;
  @Output('change') change=new  EventEmitter();
  @Input('alias-haha') isdummyalias: string;
  isFavouritetwo:boolean;
  titl="hello";
  constructor() { console.log('styles and styleUrl both can be used but what comes last will be effective');}
  result: string;

  ngOnInit() {
    this.result = 'Use Two-Way';
  }
 
  onClick(){
    this.isFavourite=!this.isFavourite;
    // console.log(this.isFavourite)
    // console.log(this.isFavouritetwo)
    this.change.emit({favourite: this.isFavourite, isdummyaliasnew: this.isdummyalias, favouriteTwo: this.isFavouritetwo });
  }
  onClick2(){
   
    this.isFavouritetwo=!this.isFavouritetwo;
    
  }
  title="aidhcia";
  prar;
  canSave=true;
  rev(){
    this.canSave=!this.canSave; 
  }
  ok(){
//    alert('yeahd');
    this.prar=this.prar+'a';
  }
//  task={assignee:{name:'ncfjdnn'}};
  task={ assignee:{ name:'ncfjdnn'}};
}
export interface FavouriteChanged{
  favourite: boolean, isdummyaliasnew: boolean, favouriteTwo: boolean

}
