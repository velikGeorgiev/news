import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketioService } from './services/socketio.service';
import { HttpClientModule } from '@angular/common/http';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post-list/post/post.component';
import { ReadPostsComponent } from './components/read-posts/read-posts.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { InputComponent } from './components/ui/input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostComponent,
    ReadPostsComponent,
    HeroSectionComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
