import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormBuilder} from '@angular/forms';
import { PostService } from '../../../service/post/post.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  id: any;
  editForm: FormGroup;
  errors: any = null;
  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public fb: FormBuilder,
    private post:PostService
  ) { 
    this.editForm = this.fb.group({
      title: [''],
      subtitle: [''],
      tags: [''],
      content: [''],
    });
  }
  postdata:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPost'];
    this.post.editPostData(this.id).subscribe((data)=>{
      this.postdata = data;
      this.editForm = this.fb.group({
        title: [this.postdata.data.title],
        subtitle: [this.postdata.data.subtitle],
        tags: [this.postdata.data.tags],
        content: [this.postdata.data.content],
      });
    });
  }

  update(){

    this.post.updatePostData(this.id,this.editForm.value).subscribe((data)=>{
    },(error) => {
      this.errors = error.error;
    },() => {
      this.router.navigate(['post']);
  });
}
}
