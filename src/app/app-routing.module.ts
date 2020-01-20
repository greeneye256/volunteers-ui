import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {CreateBranchComponent} from './components/create-branch/create-branch.component';
import {GoodhomeComponent} from './components/goodhome/goodhome.component';
import {ListvolunteersComponent} from './components/listvolunteers/listvolunteers.component';

const routes: Routes = [
  {
    path: 'home',
    component: GoodhomeComponent
  },
  {
    path: 'listvolunteers',
    component: ListvolunteersComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'createbranch',
    component: CreateBranchComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
