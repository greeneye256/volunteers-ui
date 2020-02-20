import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CreatevolunteerComponent} from './components/create-volunteer/createvolunteer.component';
import {VolunteersListComponent} from './components/volunteers-list/volunteers-list.component';
import {BranchFormComponent} from './components/create-branch/branch-form.component';
import {EditVolunteerComponent} from './components/edit-volunteer/edit-volunteer.component';
import { BranchesListComponent } from './components/branches-list/branches-list.component';
import { EditBranchComponent} from './components/edit-branch/edit-branch.component';
import {MemberCreateComponent} from './components/member/member-create/member-create.component';
import {MembersListComponent} from './components/member/members-list/members-list.component';
import {MemberEditComponent} from './components/member/member-edit/member-edit.component';

const routes: Routes = [
  {
    path: 'memberslist',
    component: MembersListComponent
  },
  {
    path: 'membercreate',
    component: MemberCreateComponent
  },
  {
    path: 'brancheslist',
    component: BranchesListComponent
  },
  {
    path: 'edit/branch/:id',
    component: EditBranchComponent
  },
  {
    path: 'edit/member/:id',
    component: MemberEditComponent
  },
  {
    path: 'createvolunteer',
    component: CreatevolunteerComponent
  },
  {
    path: 'branchform',
    component: BranchFormComponent
  },
  {
    path: '',
    component: HomeComponent
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
