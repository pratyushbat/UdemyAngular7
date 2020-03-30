import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
courses=[]
  @Input('likesCount')  likesCount :number;
  @Input('isActive') isActive:boolean;
  constructor() { }
  onClickNew(){
    console.log('hjasdjab hello')
this.likesCount +=(this.isActive) ? -1 : 1;
this.isActive=!this.isActive;
  }
  ngOnInit() {
    console.log(this.likesCount,this.isActive)
  }
  isActiveTrue(){}
  onAdd(){
    this.courses.push({id:9,name:'sdhca'

    })
  }
  onRemove(course){
    let index =this.courses.indexOf(course);
    this.courses.splice(index,1);
  }
  onUpdate(course){
   course.name='Updated'
  }
  loadCourses(){
  this.courses=[{id:1,name:'maths',credit:'10'},
  {id:2,name:'computer',credit:'10'},
  {id:3,name:'english',credit:'10'},{name:'science',credit:'10'}]
   }
   trackCourse(index,course){
return     course? course.id:undefined;
   }

}
