import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Post } from '../entities/Post';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  public getAll():Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_ENDPOINT + 'news/');
  }

  public getAllArchived():Observable<Post[]> {
    return this.http.get<Post[]>(environment.API_ENDPOINT + 'archive/');
  }

  public archive(post:Post):Observable<Response> {
    return this.http.put<Response>(`${environment.API_ENDPOINT}news/archive/${post._id}`, {});
  }

  public removeArchive(post:Post):Observable<Response> {
    return this.http.delete<Response>(`${environment.API_ENDPOINT}archive/${post._id}`, {});
  }

  public addPost(post:Post):Observable<HttpResponse<Response>> {
    let postData = {
      author: post.author,
      text: post.text,
      title: post.title,
    };

    return this.http.post<Response>(`${environment.API_ENDPOINT}news/`, postData, {observe: 'response'});
  }
}
