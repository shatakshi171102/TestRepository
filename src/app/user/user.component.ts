// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-user',
// //   templateUrl: './user.component.html',
// //   styleUrl: './user.component.css'
// // })
// // export class UserComponent {

// // }

// // user.component.ts
// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {
//   users: any[] = [];
//   newUser: any = {};

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   loadUsers(): void {
//     this.userService.getUsers().subscribe(data => {
//       this.users = data;
//     });
//   }

//   addUser(): void {
//     this.userService.addUser(this.newUser).subscribe(() => {
//       this.loadUsers();
//       this.newUser = {};
//     });
//   }

//   updateUser(user: any): void {
//     this.userService.updateUser(user).subscribe(() => {
//       this.loadUsers();
//     });
//   }

//   deleteUser(id: number): void {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.loadUsers();
//     });
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import { UserService } from '../user.service';

// @Component({
//   selector: 'app-user',
//   templateUrl: './user.component.html',
//   styleUrls: ['./user.component.css']
// })
// export class UserComponent implements OnInit {
//   data: any[] = [];
//   newUser: any = {};
//   editMode: boolean = false;
//   feedbackMessage: string = '';

//   constructor(private userService: UserService) {}

//   ngOnInit(): void {
//     this.loadUsers();
//   }

//   loadUsers(): void {
//     this.userService.getUsers().subscribe(data => {
//       this.data = data;
//     });
//   }

//   addUser(): void {
//     if (this.isValidUser(this.newUser)) {
//       if (this.editMode) {
//         this.userService.updateUser(this.newUser).subscribe(() => {
//           this.loadUsers();
//           this.resetForm();
//           this.feedbackMessage = 'User updated successfully!';
//         });
//       } else {
//         this.userService.addUser(this.newUser).subscribe(() => {
//           this.loadUsers();
//           this.resetForm();
//           this.feedbackMessage = 'User added successfully!';
//         });
//       }
//     } else {
//       this.feedbackMessage = 'Please fill in all fields.';
//     }
//   }

//   editUser(user: any): void {
//     this.newUser = { ...user };
//     this.editMode = true;
//     this.feedbackMessage = '';
//   }

//   deleteUser(id: number): void {
//     this.userService.deleteUser(id).subscribe(() => {
//       this.loadUsers();
//       this.feedbackMessage = 'User deleted successfully!';
//     });
//   }

//   resetForm(): void {
//     this.newUser = {};
//     this.editMode = false;
//   }

//   isValidUser(user: any): boolean {
//     return user.UserName && user.UserType && user.FirstName && user.LastName && user.Age && user.Gender && user.Email && user.ContactNo && user.Address;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: any[] = [];
  filteredUsers: any[] = [];
  newUser: any = {};
  editMode: boolean = false;
  feedbackMessage: string = '';
  searchTerm: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.data = data;
      this.filteredUsers = data;
    });
  }

  addUser(): void {
    if (this.isValidUser(this.newUser)) {
      if (this.editMode) {
        this.userService.updateUser(this.newUser).subscribe(() => {
          this.loadUsers();
          this.resetForm();
          this.feedbackMessage = 'User updated successfully!';
        });
      } else {
        this.userService.addUser(this.newUser).subscribe(() => {
          this.loadUsers();
          this.resetForm();
          this.feedbackMessage = 'User added successfully!';
        });
      }
    } else {
      this.feedbackMessage = 'Please fill in all fields.';
    }
  }

  editUser(user: any): void {
    this.newUser = { ...user };
    this.editMode = true;
    this.feedbackMessage = '';
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
      this.feedbackMessage = 'User deleted successfully!';
    });
  }

  resetForm(): void {
    this.newUser = {};
    this.editMode = false;
  }

  isValidUser(user: any): boolean {
    return user.UserId && user.UserName && user.UserType && user.FirstName && user.LastName && user.Age && user.Gender && user.Email && user.ContactNo && user.Address;
  }

  searchUsers(): void {
    if (this.searchTerm) {
      this.filteredUsers = this.data.filter(user =>
        user.UserId.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.UserName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.UserType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.FirstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.LastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.Email.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.ContactNo.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.Address.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredUsers = this.data;
    }
  }
}
