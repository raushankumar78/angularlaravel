import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { PostService } from '../../../service/post/post.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

 
  addPost: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    private post:PostService
  ) {
    this.addPost = this.fb.group({
      title: [''],
      subtitle: [''],
      tags: [''],
      content: [''],
    });
  }

  message: boolean=false;
  ngOnInit(): void {
  }

  savePostData(){
    this.post.savePostData(this.addPost.value).subscribe((result)=>{
      this.message=true;
      this.addPost.reset();
    },(error) => {
      this.errors = error.error;
    },() => {
      this.addPost.reset();
      this.router.navigate(['post']);
    });
  }

}
