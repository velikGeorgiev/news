import { Injectable, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { io, Socket } from 'socket.io-client/build/index';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket:Socket;
  
  private _postEvent:EventEmitter<string> = new EventEmitter<string>()
  private _archiveEvent:EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ADDR);

    this.socket.on('posts', data => {
      this._postEvent.emit(data);
    });

    this.socket.on('archive', data => {
      this._archiveEvent.emit(data);
    });
  }

  public onPost(callback) {
    this._postEvent.subscribe(callback);
  }

  public onArchive(callback) {
    this._archiveEvent.subscribe(callback);
  }
}
