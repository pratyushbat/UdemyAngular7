import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubFollowerService extends DataService {

  constructor( http:HttpClient) {
    super(http,'https://api.github.com/users/mosh-hamedani/followers');
   }

}
