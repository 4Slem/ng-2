import { Http, Response } from '@angular/http'; 
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export class User {
    constructor (
        public userEmail: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public group: number,
        public id?: number
    ) {}
  }

@Injectable()
export class UsersService {
    constructor(private http: Http) {}

    getUserByEmail(email: string): Observable<User> {
        return this.http.get(`http://localhost:3000/users?userEmail=${email}`)
            .map( (response: Response) => response.json())
            .map( (user: any[]) => user[0] ? user[0] : undefined);
    }

    createNewUser(user: User): Observable<any> {
        return this.http.post('http://localhost:3000/users', user)
            .map((response: Response) => {
                return response.json();
            });
    }
}