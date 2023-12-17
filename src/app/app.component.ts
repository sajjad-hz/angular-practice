import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';
  navigateLink: string = "recipes"

  navigateTo (event: string){
    this.navigateLink = event
    console.log('this.navigateLink', this.navigateLink)
  }
}
