import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UsersService } from '../../shared/services/users.service';
import { AuthService } from '../../shared/services/auth.service';


class Message {
  constructor(public text: string, public type: string) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  message: Message;

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.message = new Message('', 'danger');
  }

  private showMessage(text: string, type: string = 'danger') {
    this.message = new Message(text, type);
    window.setTimeout(() => {
      this.message.text = '';
    }, 5000);
  }

  onSubmit () {
    const formData = this.form.value;

    this.userService.getUserByEmail(formData.email)
      .subscribe((user: any) => {
        if(user) {
          console.log(user)
          if(user.password === formData.password) {
            this.message.text = '';
            window.localStorage.setItem('user', JSON.stringify(user.id));
            this.authService.login();
            this.router.navigate(['profile']);
          } else {
            this.showMessage('Password is error');
          }
        } else {
          this.showMessage('Username is error');
        }
      });
  }

}
