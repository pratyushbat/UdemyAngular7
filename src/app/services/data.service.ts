import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError,Observable } from 'rxjs'
import { AppError } from '../app.error';
import {  HelloNotFoundError } from '../not-found';
import { BadInput } from '../bad-input';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type' :'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
 
  constructor(private http:HttpClient,private url:string) { }

  getAll(){

  return  this.http.get(this.url).pipe(catchError(this.handleError));
}

create(resource):Observable<any>{
  console.log(resource)
  return this.http.post(this.url,resource,httpOptions).pipe(
    catchError(this.handleError ));  

    // return this.http.post<any>(this.url, resource, httpOptions).pipe(
    //   tap((result) => this.save_token(result)),
    //   catchError(this.handleError<any>('login'))

}

update(resource){
 return this.http.patch(this.url+'/'+resource.id,JSON.stringify({isRead:true})).pipe(catchError(this.handleError));
}


delete(id){
  return this.http.delete(this.url+'/'+id).pipe(
    catchError(   this.handleError )
);
}

 private handleError(error:Response){
  if(error.status===404)
  return throwError(new HelloNotFoundError());

  if(error.status===400)
  return throwError(new BadInput(error.json()))

 return   throwError(new AppError(error))
 }

}

