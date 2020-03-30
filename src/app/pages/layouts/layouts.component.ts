import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})
export class LayoutsComponent implements OnInit {
  categories=[
    {id:'1',name:"first"},
    {id:'2',name:"second"},
    {id:'3',name:"not Art"}
  ];
    
  viewMode='something else';
  collapse: boolean = true;
courses=[{
  id:1,name:'course1'
},
{
  id:2,name:'course2'
},
{
  id:3,name:'course3'
}
]
  constructor() { }

  ngOnInit() {
    console.log('inside layout')
  }
  submit(course){
console.log(course)
  }
  // onAdd(){
  //   this.courses.push({id:9,name:'sdhca'

  //   })
  // }
  // onRemove(course){
  //   let index =this.courses.indexOf(course);
  //   this.courses.splice(index,1);
  // }

}
