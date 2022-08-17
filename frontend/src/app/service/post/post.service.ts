import { Injectable } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../interface/post';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(public auth:AuthService,private http:HttpClient) { }
  getAllPost(){
    return this.http.get(this.auth.url+'post');
   }
   savePostData(data: any){
     // console.log(data)
     return this.http.post(this.auth.url+'post',data)
   }

   //show

   showPostData(id:any){
    return this.http.get(this.auth.url+'post/'+id)
   }

   //edit Post Data
   editPostData(id:any){
    return this.http.get(this.auth.url+'post/'+id+'/edit')
   }

   //update data
   updatePostData(id:any,data: any){
    // console.log(data)
    return this.http.put(this.auth.url+'post/'+id,data)
  }
 
   deletePostData(id: any){
     return this.http.delete(this.auth.url+'post/'+id)
   }
   getAllPostByTag(data:string){

    return this.http.get(this.auth.url+'post/search/'+data);
   }
}
