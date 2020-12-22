import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Post } from 'src/app/entities/Post';
import { SocketioService } from 'src/app/services/socketio.service';
import { NewsService } from 'src/app/services/news.service';
import { ActivatedRoute } from '@angular/router';
import { InputComponent } from '../ui/input/input.component';

@Component({
  selector: 'app-read-posts',
  templateUrl: './read-posts.component.html',
  styleUrls: ['./read-posts.component.scss']
})
export class ReadPostsComponent implements OnInit {
  showNewPosts:boolean = true;
  posts:Post[];
  formError:string = '';

  @ViewChild('author', {static: false}) author:InputComponent;
  @ViewChild('title', {static: false}) title:InputComponent;
  @ViewChild('text', {static: false}) text:ElementRef;

  constructor(private socket:SocketioService,
              private activatedRoute: ActivatedRoute,
              private newsService:NewsService) {

    this.socket.setupSocketConnection();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const type = params['type'] || 'new';
      this.showNewPosts = (type == 'new' || 'archive') ? type === 'new' : true;

      this.loadPosts();
    });


    this.socket.onPost((socketPost:Post) => {
      if (this.showNewPosts) {
        socketPost.newPost = true;
        this.posts.unshift(socketPost);
      }
    });

    this.socket.onArchive((socketPost:Post) => {
      if (!this.showNewPosts) {
        socketPost.newPost = true;
        this.posts.unshift(socketPost);
      }
    });
  }

  loadPosts() {
    let getPosts = null;
    this.posts = [];

    if(this.showNewPosts) {
      getPosts = this.newsService.getAll();
    } else {
      getPosts = this.newsService.getAllArchived();
    }

    getPosts.subscribe((posts:Post[]) => {
      this.posts = posts;
    });
  }

  switchToNew(showNewPosts) {
    this.showNewPosts = showNewPosts;

    this.loadPosts();
  }

  postArchived(post:Post) {
    let postIndex = this.posts.indexOf(post);

    if (postIndex < 0) return;

    let action;
    
    if (this.showNewPosts) {
      action = this.newsService.archive(post);
    } else {
      action = this.newsService.removeArchive(post);
    }

    action.subscribe(_ => {
      this.posts.splice(postIndex, 1);
    });
  }

  scrollBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  submitPost() {
    const text = this.text.nativeElement.value;
    const author = this.author.value;
    const title = this.title.value;

    const post = new Post(title, author, text);

    this.newsService.addPost(post).subscribe(response => {
      
    }, error => {
      this.formError = error.error.message;
    });
  }
}
