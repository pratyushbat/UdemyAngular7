import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompleterData, CompleterService } from 'ng2-completer';

@Component({
  selector: 'app-archieve',
  templateUrl: './archieve.component.html',
  styleUrls: ['./archieve.component.css']
})
export class ArchieveComponent implements OnInit {
year:number;
month:number;
protected searchStr: string;
  protected captain: string;
  protected dataService: CompleterData;
  protected searchData = [
    { color: 'red', value: '#f00' },
    { color: 'green', value: '#0f0' },
    { color: 'blue', value: '#00f' },
    { color: 'cyan', value: '#0ff' },
    { color: 'magenta', value: '#f0f' },
    { color: 'yellow', value: '#ff0' },
    { color: 'black', value: '#000' },
    { color: 'redi', value: '#f00' },
    { color: 'greeni', value: '#0f0' },
    { color: 'bluei', value: '#00f' },
     { color: 'cred', value: '#f00' },
    { color: 'cgreen', value: '#0f0' },
    { color: 'cblue', value: '#00f' },
    { color: 'ccyan', value: '#0ff' },
    { color: 'cmagenta', value: '#f0f' },
    { color: 'cyellow', value: '#ff0' },
    { color: 'cblack', value: '#000' },
    { color: 'credi', value: '#f00' },
    { color: 'cgreeni', value: '#0f0' },
    { color: 'cbluei', value: '#00f' },
    { color: 'czcyan', value: '#0ff' },
    { color: 'cxmagenta', value: '#f0f' },
    { color: 'ccyellow', value: '#ff0' },
    { color: 'cvblack', value: '#000' }
    , { color: 'ctred', value: '#f00' },
    { color: 'chgreen', value: '#0f0' },
    { color: 'ciblue', value: '#00f' },
    { color: 'cocyan', value: '#0ff' },
    { color: 'cpmagenta', value: '#f0f' },
    { color: 'cqyellow', value: '#ff0' },
    { color: 'crblack', value: '#000' }
  ];
  protected captains = ['James T. Kirk', 'Benjamin Sisko', 'Jean-Luc Picard', 'Spock', 'Jonathan Archer', 'Hikaru Sulu', 'Christopher Pike', 'Rachel Garrett' ];
 
  constructor(private router:Router,private route:ActivatedRoute,private completerService: CompleterService) {
    this.dataService = completerService.local(this.searchData, 'color', 'color');
   }

  ngOnInit() {
   let params= this.route.snapshot.paramMap;
   this.year=+params.get('year')
   this.month=+params.get('month')
   
  }
  view(){
    this.router.navigate(['/archeve']);
  }

  

}
