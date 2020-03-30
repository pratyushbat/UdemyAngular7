import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
tweet= {
  body: '...',
  likesCount: 12,
  isLiked: true
}
a=10;
b=true;
  constructor() { }

  ngOnInit() {
    console.log(this.tweet)
  }

}
