import { Component, OnInit, Input, ElementRef, ViewChild, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/entities/Post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input('post') post:Post;
  @Output() onArchive:EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('postContainer', {static: false}) postContainer:ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  archive(evt, post:Post) {
    evt.preventDefault();

    this.postContainer.nativeElement.classList.add('fade-animation');

    setTimeout(() => this.onArchive.emit(), 500);
  }
}
