import { Component, OnInit } from '@angular/core';
import { FavouriteChanged } from '../favourite/favourite.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post={
    title: "Title",
    isFavourite:true
  }
  isActive=false;
  title="List of COntent";
  colSpan=2;
  emails="hello";
  constructor() { }

  onKeyUp($event){
if($event.keyCode==13){
  console.log('enter')
}
console.log('aihasih')

  }
  onKeyUp2(){
      console.log('enter from')
    }
  ngOnInit() {
    console.log('inside home')
  }
  on(){
    console.log('0---0')
    console.log(event);
  }
  on2($event){
    $event.stopPropagation()
    console.log($event);
  }


  getDataUsingTemplateAndEventBoth($event,email){

    console.log($event.target.value);
console.log('  ')
console.log(email)
  }

  TwowayBind(){
      console.log('enter')
    console.log(this.emails)
    // because above is property bind-from compo to view
    }
    text="adkjluhckas adsgbcgjad aiysdggccya"
    course={
      title:'jncdlaj',
      rating: 4.97976,
      students:301233,
      price:190.95,
      releaseDate:new Date(2018,3,1)
    }
    onFavouriteChange(eventArgs:FavouriteChanged){
      // this.post.isFavourite=true;
      console.log('change detected',eventArgs)   
    }
    hurray='hurray from home using alias we can change name of field in favourite without breaking';

    
}
