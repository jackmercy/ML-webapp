import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({
      'Content-Type': 'application/json'
  })
};

@Injectable()
export class CoreService {
    userUrl = '/api/users';
    movieUrl = '/api/movie';
    constructor(private _http: HttpClient) { }

    login(name: string, id: string): Observable<any> {
        return this._http.post(this.userUrl + '/login', JSON.stringify({name: name, id: id}), httpOptions)
                    .map((response: Response) => {
                        const user = response;
                        /* write to session storage here */
                        return user;
                    });
    }

    getMovies(): Observable<any> {
        return this._http.get(this.movieUrl + '/list', httpOptions)
                    .map((response) => {
                        const movies = response;
                        return movies;
                   });
    }

}
