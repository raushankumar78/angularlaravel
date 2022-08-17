import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../service/post/post.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.css']
})
export class ShowPostComponent implements OnInit {
  id: any;
  showData: any=[]
  constructor(public router: Router,
    private route: ActivatedRoute,
    private post:PostService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idPost'];
    this.post.showPostData(this.id).subscribe((allData)=>{
      this.showData=allData;
      console.log(this.showData)
    })
  }

}
