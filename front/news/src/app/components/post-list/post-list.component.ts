import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { Post } from 'src/app/entities/Post';
import { SocketioService } from 'src/app/services/socketio.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input('posts') posts:Post[];
  @Output() onArchive:EventEmitter<Post> = new EventEmitter<Post>();
  
  constructor() { }

  ngOnInit(): void {

  }

  postArchived(post:Post) {
    this.onArchive.emit(post);
  }
}
