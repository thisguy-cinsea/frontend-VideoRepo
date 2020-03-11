import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  private BASE_URL = 'http://localhost:8080/video';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

  handleError(error: HttpErrorResponse){
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent){
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  public getVideos(){
    //   return this.http.get<User>(url);
    const url = this.BASE_URL+"/";
    return this.httpClient.get<Video[]>(url).pipe(retry(0), catchError(this.handleError),
    tap(res =>{
      console.log(res);
    }));
  }

  deleteVideo (video: Video | number): Observable<Video> {
    if( typeof video === 'number') {
      return this._deleteVideo(video);
    } else {
      return this.__deleteVideo(video);
    }
  }

  
  _deleteVideo (id:  number): Observable<Video> {
    const url = `${this.BASE_URL}/${id}`;
    console.log("deleteVideo:" , url);
  
    return this.httpClient.delete<Video>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted video id=${id}`)),
      catchError(this.handleError)
    );
  }

  
  __deleteVideo (video: Video): Observable<Video> {
    return this._deleteVideo(video.videoId);
  }

  constructor(private httpClient: HttpClient){}
}