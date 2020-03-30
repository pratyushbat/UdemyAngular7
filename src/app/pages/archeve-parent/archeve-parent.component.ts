import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archeve-parent',
  templateUrl: './archeve-parent.component.html',
  styleUrls: ['./archeve-parent.component.css']
})
export class ArcheveParentComponent implements OnInit {

  archieves;
  constructor() { }

  ngOnInit() {
    this.archieves=[
      {  year:'2017',month:1},
      {  year:'2017',month:2},
      {  year:'2017',month:3}
    ];
  }

}
