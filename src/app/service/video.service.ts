import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { Video } from '../model/video';

@Injectable({
  providedIn: 'root'
})

export class VideoService {
  private BASE_URL = 'http://localhost:8080/video';
  // httpOptions = {
  //   headers: new HttpHeaders({'Content-Type': 'application/json'})
  // };

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

  // private handleError<T> (operation = 'operation', result?: T) {
  //   return (error: any): Observable<T> => {
  //     // TODO: send the error to remote logging infrastructure
  //     console.error(error); // log to console instead

  //     // TODO: better job of transforming error for user consumption
  //     console.log(`${operation} failed: ${error.message}`);

  //     // Let the app keep running by returning an empty result.
  //     return of(result as T);
  //   };
  // }

  constructor(private httpClient: HttpClient) { }
}

// export class UserService {
//   private baseUrl = 'http://localhost:8080/user';


//   constructor(private http: HttpClient) { }

//     // POST: add a new user to the Server
//     addUser(user) {
//       const url = `${this.baseUrl}/`;
//       console.log("user in service",user)
//       console.log(this.http.post(url, JSON.stringify(user), this.httpOptions));
//       return this.http.post(url, JSON.stringify(user), this.httpOptions)
//         .pipe(tap((newUser) => console.log(newUser)),
//         catchError(this.handleError<User>('addUSer'))
//       );
//     }

// // GET: login in user from Server
// login(user) {
//   const url = `${this.baseUrl}/login`;
//   console.log("login in service",user)
//   console.log(this.http.get(url,user));
//   return this.http.get<User>(url);
//     //   .pipe(tap((newUser) => console.log(newUser)),
//   //   catchError(this.handleError<User>('addUSer'))
//   // ));
// }

//          /**
//    * Handle Http operation that failed.
//    * Let the app continue.
//    * @param operation - name of the operation that failed
//    * @param result - optional value to return as the observable result
//    */
  
