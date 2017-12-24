import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUser().subscribe((user) => {
        this.user = user;
        console.log(user)
    });
    
  }

}
