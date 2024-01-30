import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'sl', component: ShoppingListComponent },
  { path: 'users', component: UsersComponent, children:[
    { path: 'user/:id', component: UserComponent }
  ] },
  { path: 'recipe/:name', component: RecipeEditComponent },
  { path: 'test/:id/edit', component: TestComponent },
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
