import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];

    this.user = this.usersService.getUser(id);
    this.route.params.subscribe((params: Params) => {
      this.user = this.usersService.getUser(params['id']);
    });
  }

  onEditUser(id: number) {
    
  }
}
