import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../service/post/post.service';
@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {
  searchtag: string = '';
  constructor(private post:PostService) { }
  postData: any=[]

  ngOnInit(): void {
    this.post.getAllPost().subscribe((allData)=>{
      this.postData=allData;
    })
  }
  deletePost(id: any){
    this.post.deletePostData(id).subscribe((data)=>{
    alert("Delete Successfully")
    this.ngOnInit();
    })
      }

      searchBytag(){
        console.log(this.searchtag)
        this.post.getAllPostByTag(this.searchtag).subscribe((allDatas)=>{
          this.postData=allDatas;
          console.log(allDatas)
        })
      }
}
