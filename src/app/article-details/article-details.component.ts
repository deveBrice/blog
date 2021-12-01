import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.scss']
})

export class ArticleDetailsComponent implements OnInit {
   commentsForm: FormGroup
    
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
     this.comment()
  }

  comments = [
    { id : 1, post_id : 1, content : "..." },
    { id : 2, post_id : 2, content : "..." },
    { id : 3, post_id : 2, content : "..." },
    { id : 4, post_id : 2, content : "..." },
  ];

  comment = () => {
    this.commentsForm = this.fb.group({
        text: ['']
    })
  }

  addComment = () => {
    this.commentsForm.valueChanges.subscribe(
      res => {
        this.comments.push({ id : 1, post_id : 1, content : res.text })
      }
    )
  }
}
