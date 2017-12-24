import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { UsersService } from '../../shared/services/users.service';

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

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(private userSerice: UsersService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)]),
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      'group': new FormControl(null, [Validators.required]),
      'agree': new FormControl(false, [Validators.requiredTrue])
    });
  }

  onSubmit() {

    const user = new User(
      this.form.value.email, 
      this.form.value.password, 
      this.form.value.firstName, 
      this.form.value.lastName,
      this.form.value.group
    );

    this.userSerice.createNewUser(user)
      .subscribe((user: User) => {
        this.router.navigate(['/login']);
      });
  }

  forbiddenEmails(control: FormControl): Promise<any> {
   
    return new Promise((resolve, reject) => {
      this.userSerice.getUserByEmail(control.value)
        .subscribe(user => {
          if(user) {
            console.log(user)
          } else {

          }
        });
    });
  }

}
