import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/login/login.module#LoginPageModule' },
  { path: 'user-list', loadChildren: './components/userList/userList.module#UserListPageModule' },
  { path: 'user-create', loadChildren: './components/userCreate/userCreate.module#UserCreatePageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
