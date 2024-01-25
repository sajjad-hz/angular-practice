import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from './users.model';
import { User } from './user/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService],
})
export class UsersComponent {
  users: User[];
  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.users = this.userService.users;
    console.log('this.users', this.users);
  }

  onUserClick(id: number) {
    console.log(id);
    this.router.navigate(['user', id], { relativeTo: this.route, queryParamsHandling:'preserve' });
  }
}
