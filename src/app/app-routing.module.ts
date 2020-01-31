import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent} from './components/admin/admin.component';
import {HomeComponent} from './components/home/home.component';
import {CreateBranchComponent} from './components/create-branch/create-branch.component';
import {GoodhomeComponent} from './components/goodhome/goodhome.component';
import {ListvolunteersComponent} from './components/listvolunteers/listvolunteers.component';
import {CreatevolunteerComponent} from './components/createvolunteer/createvolunteer.component';
import {VolunteersListComponent} from './components/volunteers/volunteers-list.component';
import {BranchFormComponent} from './components/branch-form/branch-form.component';

const routes: Routes = [
  {
    path: 'createvolunteer',
    component: CreatevolunteerComponent
  },
  {
    path: 'branchform',
    component: BranchFormComponent
  },
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
  },
  {
    path: 'volunteerslist',
    component: VolunteersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
