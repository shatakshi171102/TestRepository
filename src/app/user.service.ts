// // import { Injectable } from '@angular/core';
// // import { HttpClient } from '@angular/common/http';
// // import { Observable } from 'rxjs';
// // import { User } from './user.model';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class UserService {
// //   private apiUrl = 'https://localhost:5001/api/users';

// //   constructor(private http: HttpClient) {}

// //   getUsers(): Observable<User[]> {
// //     return this.http.get<User[]>(this.apiUrl);
// //   }

// //   getUser(id: number): Observable<User> {
// //     return this.http.get<User>(`${this.apiUrl}/${id}`);
// //   }

// //   createUser(user: User): Observable<User> {
// //     return this.http.post<User>(this.apiUrl, user);
// //   }

// //   updateUser(user: User): Observable<User> {
// //     return this.http.put<User>(`${this.apiUrl}/${user.id}`, user);
// //   }

// //   deleteUser(id: number): Observable<void> {
// //     return this.http.delete<void>(`${this.apiUrl}/${id}`);
// //   }
// // }


// // user.service.ts
// import { Injectable } from '@angular/core';
// import { Observable, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private users = [
//     { id: 1, UserName:'user1', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user1@example.com', ContactNo:'1234567890', Address:'Address 1'},
//     { id: 2, UserName:'user2', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user2@example.com', ContactNo:'1234567890', Address:'Address 2'},
//     { id: 3, UserName:'user3', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user3@example.com', ContactNo:'1234567890', Address:'Address 3'},
//     { id: 4, UserName:'user4', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user4@example.com', ContactNo:'1234567890', Address:'Address 4'},
//     { id: 5, UserName:'user5', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user5@example.com', ContactNo:'1234567890', Address:'Address 5'},
//   ];
  

//   constructor() {}

//   getUsers(): Observable<any[]> {
//     return of(this.users);
//   }

//   addUser(user: any): Observable<any> {
//     this.users.push({ ...user, id: this.users.length + 1 });
//     return of(user);
//   }

//   updateUser(user: any): Observable<any> {
//     const index = this.users.findIndex(u => u.id === user.id);
//     if (index !== -1) {
//       this.users[index] = user;
//     }
//     return of(user);
//   }

//   deleteUser(id: number): Observable<any> {
//     this.users = this.users.filter(u => u.id !== id);
//     return of({ id });
//   }
// }

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private data = [
    { UserId: 1, UserName:'user1', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user1@example.com', ContactNo:'1234567890', Address:'Address 1'},
    { UserId: 2, UserName:'user2', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user2@example.com', ContactNo:'1234567890', Address:'Address 2'},
    { UserId: 3, UserName:'user3', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user3@example.com', ContactNo:'1234567890', Address:'Address 3'},
    { UserId: 4, UserName:'user4', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user4@example.com', ContactNo:'1234567890', Address:'Address 4'},
    { UserId: 5, UserName:'user5', UserType:'Customer', FirstName:'John', LastName:'Doe', Age:30, Gender:'M', Email:'user5@example.com', ContactNo:'1234567890', Address:'Address 5'},
  ];

  constructor() {}

  getUsers(): Observable<any[]> {
    return of(this.data);
  }

  addUser(user: any): Observable<any> {
    this.data.push({ ...user, UserId: this.data.length + 1 });
    return of(user);
  }

  updateUser(user: any): Observable<any> {
    const index = this.data.findIndex(u => u.UserId === user.UserId);
    if (index !== -1) {
      this.data[index] = user;
    }
    return of(user);
  }

  deleteUser(UserId: number): Observable<any> {
    this.data = this.data.filter(u => u.UserId !== UserId);
    return of({ UserId });
  }
}

