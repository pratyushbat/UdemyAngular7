import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent,HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError,Observable } from 'rxjs'
import { AppError } from '../app.error';
import {  HelloNotFoundError } from '../not-found';
import { BadInput } from '../bad-input';
// import 'rxjs/add/operator/catch';
// import  'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  posts;
  url='https://jsonplaceholder.typicode.com/posts';
 
  constructor(private http:HttpClient) { }
 
 
  getPosts(){
  return  this.http.get(this.url).pipe(catchError(this.handleError));
}
createPosts(post){
  return this.http.post(this.url,JSON.stringify(post)).pipe(
    catchError(this.handleError    )
);
  
}
update(post){
 return this.http.patch(this.url+'/'+post.id,JSON.stringify({isRead:true})).pipe(catchError(this.handleError));
}
// generic error
// del(id){
  
//   return this.http.get(this.url+'/'+id).pipe(
//     catchError(
//         (error: any, caught: Observable<HttpEvent<any>>) => {
//            console.log(error)
//             throw error;
//         }
//     ),
// );
// }
// app specific error

// generic
del(id){
  
  return this.http.get(this.url+'/'+id).pipe(
    catchError(
        (error: any, caught: Observable<HttpEvent<any>>) => {
           console.log(error)
         return   Observable.throw(error)
        }
    ),
);
}
delWithAppSpecificError(id){
  
  return this.http.get(this.url+'/'+id).pipe(
    catchError(   this.handleError )
);
}
// delWithAppSpecificErrorCopy(id){
  
//   return this.http.get(this.url+'/'+id).pipe(
//     catchError(
//         (error: Response, caught: Observable<HttpEvent<any>>) => {
//           if(error.status===204)
//           return Observable.throw(new HelloNotFoundError())

          
//          return   Observable.throw(new AppError(error))
//         }
//     ),
// );
// }


delete(post){

  return this.http.get(this.url+'/nas '+post.id);
 }


 private handleError(error:Response){
  if(error.status===404)
  return throwError(new HelloNotFoundError());

  if(error.status===400)
  return throwError(new BadInput(error.json()))

 return   throwError(new AppError(error))
 }

}

