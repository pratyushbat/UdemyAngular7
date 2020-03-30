import { Component, OnInit } from '@angular/core';

import { from } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { AppError } from 'src/app/app.error';
import { HelloNotFoundError } from 'src/app/not-found';
import { BadInput } from 'src/app/bad-input';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
posts;
  constructor(private postService: PostsService) {
  
   }

  // ngOnInit() {
    
  //   this.postService.getAll().subscribe(response=>{
  //     this.posts=    response;
  // });
  // }
  
  // shorter way below
  ngOnInit() {
    this.postService.getAll().subscribe(posts=> this.posts = posts);
  }
  createPost(input:HTMLInputElement){
    let post={title: input.value};
    this.posts.splice(0,0,post);

    input.value='';

   this.postService.create(post)
    .subscribe(
       response=>{
        console.log(response);
        let a:any=response;
         post['id']=a.id;
      },(error:AppError)=>{
        this.posts.splice(0,1);

      if(error instanceof BadInput)
       alert(error.originalError);

  else{
    throw error;
  }

     });
  }
  updatePost(post){
    console.log(post)
    this.postService.update(post).subscribe(upDatedPost=>{
       console.log(upDatedPost)
        
     })
//     this.http.put(this.url,JSON.stringify(post))
  }

    deletePost(post){
      let index=this.posts.indexOf(post);
      this.posts.splice(index, 1);
    
    this.postService.delete('asjkdhajk')
    .subscribe(
      () => {      }, //null
      (error:AppError) => {
    console.log('error')
        this.posts.splice(index,0,post)


      if(error instanceof HelloNotFoundError)
     alert('post has been deleted already');

  else{
    throw error;
  }

     });
  }

}
