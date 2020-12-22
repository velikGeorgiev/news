import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadPostsComponent } from './components/read-posts/read-posts.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';


const routes: Routes = [
  {
    path: '',
    component: HeroSectionComponent
  },
  {
    path: 'read-posts',
    component: ReadPostsComponent
  },
  {
    path: 'read-posts/:type',
    component: ReadPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
