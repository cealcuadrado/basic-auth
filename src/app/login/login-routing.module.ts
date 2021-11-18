import { LoginComponent } from './login.component';
import { FullLayoutComponent } from './../layouts/full-layout/full-layout.component';
import { LoggedLayoutComponent } from './../layouts/logged-layout/logged-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: '', component: LoginComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
