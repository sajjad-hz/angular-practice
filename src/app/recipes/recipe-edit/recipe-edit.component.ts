import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipeName: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipeName = this.route.snapshot.params['name'];

    this.route.params.subscribe((params: Params) => { // only use when change from the same component
      this.recipeName = params['name'];
    });
  }
}
