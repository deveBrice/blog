import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})

export class ArticlesListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  posts = [
    { id : 1, label : "Mon titre", content : "..." },
    { id : 2, label : "Mon titre", content : "..." },
  ];

}
