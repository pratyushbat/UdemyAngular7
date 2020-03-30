import { Component, OnInit } from '@angular/core';
import { GithubFollowerService } from 'src/app/services/github-follower.service';
import { ActivatedRoute } from '@angular/router';
import { map, filter, catchError, mergeMap, switchMap } from 'rxjs/operators';
import { Observable,combineLatest } from 'rxjs';


@Component({
  selector: ' github-follower',
  templateUrl: './github-follower.component.html',
  styleUrls: ['./github-follower.component.css']
})
export class GithubFollowerComponent implements OnInit {
  searchText='';
  options = [1, 2, 3];
optionSelected: any;

onOptionSelected(event){
 console.log(event); //option value will be sent as event
}
  characters = [
    'Finn the human',
    'Jake the dog',
    'Princess bubblegum',
    'Lumpy Space Princess',
    'Beemo1',
    'Beemo2'
  ]
  follower: any;
  constructor(private route:ActivatedRoute,private service:GithubFollowerService) {

   }

  ngOnInit() {
    //observable querymap and parammap
    combineLatest([this.route.paramMap,this.route.queryParamMap]).pipe(switchMap(combined =>{

      let order= combined[1].get('order');
      let page=combined[1].get('page');
      console.log(order,'jancnjda',page);
     return  this.service.getAll();
    })
    ).subscribe(follower=>{
      this.follower=follower;
      console.log(follower);

//this.service.getAll().subscribe(follower => {this.follower=follower; console.log(this.follower)});
    });  
let page  =this.route.snapshot.queryParamMap.get('order');
console.log(page)    
  }
  ngOnDestroy() {console.log('destroyed follower');}
  ok(){
    console.log(this.follower)
  }

}
