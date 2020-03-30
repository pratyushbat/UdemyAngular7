import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { 
    console.log('constructor')
  }
  submit(){
    this.router.navigate(['/follower'],{
      queryParams: {page:1,order:'newest'}
    });
  }

  ngOnInit() {



// if user stays

    console.log('ng On Init')
    console.log(this.route)

    console.log(this.route.paramMap['id'])
    this.route.paramMap
    .subscribe(params=>{
     
   //conver string to num
   let id = +params.get('id');
  console.log(id) 
  });



//  else use only if the user will go back to some page and then come here frome that page only
let id=this.route.snapshot.paramMap.get('id');
console.log(id);

  }


  ngOnDestroy(){
    console.log('Destroyed')
  }
}
