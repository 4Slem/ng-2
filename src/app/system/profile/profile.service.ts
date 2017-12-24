import { Http, Response } from '@angular/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProfileService {
    constructor(private http: Http) {}

    getUser(): Observable<any> {
        var userId = window.localStorage.getItem('user');
        return this.http.get(`http://localhost:3000/users?id=${userId}`)
            .map((response: Response) => response.json())
            .map( (user: any[]) => user[0] ? user[0] : undefined);
    }
}